import { Component } from '@angular/core';

@Component({
  selector: 'Newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
isFaded = false;

  toggleFade() {
    this.isFaded = !this.isFaded;
  }
}