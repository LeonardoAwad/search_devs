import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { RepoModel } from 'src/app/models/repo.model';
import { UserModel } from 'src/app/models/user.model';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  public user?: UserModel;
  public repositories?: RepoModel[];
  public search = new FormControl('', Validators.required);

  constructor(private apiService: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params
      .pipe(
        tap({
          next: ({ userName }) => {
            this.search.setValue(userName);
            this.searchUser();
          },
        })
      )
      .subscribe();
  }

  searchUser(): void {
    if (!this.search.valid) {
      return;
    }

    forkJoin([
      this.apiService.getUser(this.search.value),
      this.apiService.getUserRepo(this.search.value),
    ])
      .pipe(
        tap({
          next: ([user, repo]) => {
            this.user = user;
            this.repositories = repo.sort(
              (a, b) => b?.stargazers_count - a?.stargazers_count
            );
          },
          error: () => {
            (this.user = undefined), (this.repositories = []);
          },
        })
      )
      .subscribe();
  }

  enterPress(event: KeyboardEvent): void {
    if (event.key.toLowerCase() != 'enter') {
      return;
    }
    this.searchUser();
  }

  getLastDate(repo: string | undefined): any {
    if (!repo) {
      return;
    }

    const date2 = new Date();
    const date1 = new Date(repo);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
}
