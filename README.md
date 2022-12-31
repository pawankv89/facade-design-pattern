# facade-design-pattern
Facade Design Pattern in Angular

## Link

### Facade Design Pattern
https://balramchavan.medium.com/best-practices-building-angular-services-using-facade-design-pattern-for-complex-systems-d8c516cb95eb

https://auth0.com/blog/ngrx-facades-pros-and-cons/

##  Demo API Links
```xml
https://jsonplaceholder.typicode.com/albums
https://via.placeholder.com/150/a393af
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.


```xml

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


```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Refrence
https://www.codemag.com/article/1811061/Angular-and-the-Store