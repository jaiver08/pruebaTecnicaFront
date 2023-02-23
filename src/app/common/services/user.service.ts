import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  githubUrl: string = environment.github;

  constructor(private http: HttpClient) { }

  getuser(username: string): Observable<any>  {
    return this.http.get(`${this.githubUrl}/users/${username}`);
  }

  getTenUsers(username: string): Observable<any>  {
    return this.http.get<any>(`${this.githubUrl}/search/users?q=${username}&per_page=10`);
  }
}

