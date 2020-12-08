import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: [ './vedio.component.css' ]
})
export class VedioComponent  {
  name = 'Angular ' + VERSION.major;
}
