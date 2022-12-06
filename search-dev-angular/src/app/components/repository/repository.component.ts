import { Component, Input, OnInit } from '@angular/core';

import { RepoModel } from 'src/app/models/repo.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent {
  @Input() repo?: RepoModel;

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
