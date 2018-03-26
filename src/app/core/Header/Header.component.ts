import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';



import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: 'Header.component.html'
})
export class HeaderComponent {
  
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  onSave() {
    this.dataStorageService.saveRecipesOnServer().subscribe(
      (response) => {
        //response: HttpEvent<Object>
        console.log(response);
      //console.log(response.type === HttpEventType.Sent);
      }
    );
  }

  onFetch() {
    this.dataStorageService.getRecipesFromServer();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
