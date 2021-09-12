import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tabbing the dabbing';
  userData:any={};
  getData(data:NgForm){
    console.log(data);
    this.userData=data;

  }
  display=true;
  togglee(){
    this.display=!this.display;
  }
  
}
