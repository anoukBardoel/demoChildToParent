import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myCount: number;

  constructor(){
    this.myCount = 10;
  }

  countChange(event: number){
    this.myCount = event;
  }
}
