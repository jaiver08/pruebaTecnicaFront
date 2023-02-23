import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
      const login = this.route.snapshot.paramMap.get('login');
      this.http.get<any>(`https://api.github.com/users/${login}`)
        .subscribe(response => {
          this.user = response;
        });
    }

  ngOnInit(): void {
  }

}
