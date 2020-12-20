import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-head',
  templateUrl: './head.component.html',
  styleUrls: [ './head.component.css' ]
})
export class HeadComponent  {
  name = 'Angular ' + VERSION.major;
  date=new Date();
  opened=false;
}
