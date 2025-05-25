import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  private _count: number
  @Input() count! : number //verkorte manier voor get/set

  @Output() countChanged = new EventEmitter<number>();
  constructor(){
    this._count = 0;
  }

  ngOnInit(){
    //this._count = this.count;
  }

  increment(){
    this._count++;

    this.countChanged.emit(this._count);
  }

  decrement(){
    this._count--;

    this.countChanged.emit(this._count);
  }
}
