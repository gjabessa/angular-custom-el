import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-custom-element',
  templateUrl: './my-custom-element.component.html',
  styleUrls: ['./my-custom-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyCustomElementComponent {

}
