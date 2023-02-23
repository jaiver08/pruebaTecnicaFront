import { Component } from '@angular/core';
import { UserService } from '@common/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menssageError: boolean = false;
  username: string = '';
  getuser: any;
  getTenUsers: any;

  constructor(private userSvc: UserService) {}

  githubUser() {

    try {
      if (this.username.length < 4) {
        alert('El nombre de usuario debe contener al menos 4 caracteres');
        return;
      }
      if (this.username === 'doublevpartners') {
        alert('La palabra "doublevpartners" no se puede buscar');
        return;
      }

      this.userSvc.getuser(this.username).subscribe({
        next: (user: any) => {
          this.getuser = user;
          this.menssageError = false;
        }, error: (error) => {
          this.menssageError = true;
          console.log('Ha ocurrido un error', error);
        }
      });

      this.userSvc.getTenUsers(this.username).subscribe({
        next: (users: any) => {
          this.getTenUsers = users.items;
          this.menssageError = false;
        }, error: (error) => {
          this.menssageError = true;
          console.log('Ha ocurrido un error', error);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

}
