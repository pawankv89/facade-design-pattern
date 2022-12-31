import { Component } from '@angular/core';
import { UserFacade, UserService } from 'src/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'facade-design-pattern';
  
  constructor(private userService: UserService, private userFacade: UserFacade) {}

  ngOnInit(): void {


    //this.getUserService();

    this.userFacade.load();

    this.getUserFacade();
  }

  getUserFacade() {
     // Get Albums List
     this.userFacade.albumDetails$.subscribe((albums)=>{
      console.log('albums userFacade ', albums);
    })

     // Get Users 
    this.userFacade.userDetails$.subscribe((users)=>{
      console.log('users userFacade ', users);
    })
  }

  getUserService() {
        // Get Albums List
        this.userService.getAlbumsList().subscribe((albums)=>{
          console.log('albums ', albums);
        })
    
        // Get Users 
        this.userService.getUsersList().subscribe((users)=>{
          console.log('users ', users);
        })
  }

}
