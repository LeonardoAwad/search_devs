import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoModel } from '../models/repo.model';
import { UserModel } from '../models/user.model';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getUser(username: string): Observable<UserModel> {
    return this.httpClient.get<any>(`https://api.github.com/users/${username}`);
  }

  public getUserRepo(username: string): Observable<RepoModel[]> {
    return this.httpClient.get<any>(
      `https://api.github.com/users/${username}/repos`
    );
  }
}
