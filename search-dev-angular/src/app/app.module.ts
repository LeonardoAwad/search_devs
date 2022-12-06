import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PerfilComponent, RepositoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
