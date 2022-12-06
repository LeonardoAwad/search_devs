import { FormControl, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public search = new FormControl('', Validators.required);

  constructor(private router: Router) {}

  enterPress(event: KeyboardEvent): void {
    if (event.key.toLowerCase() != 'enter') {
      return;
    }
    this.navigate();
  }

  navigate(): void {
    if (!this.search.valid) {
      return;
    }
    this.router.navigateByUrl(`perfil/${this.search.value}`);
  }
}
