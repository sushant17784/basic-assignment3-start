import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-assignment3-start';
  lognumbers: number[] =[];
  showdetails = false;
  clicknumber = 0;
  toggleDisplay(){
      this.showdetails = !(this.showdetails);
      
      this.lognumbers.push(this.clicknumber++);
  }
  getColor(){
    return '';
  }
}
