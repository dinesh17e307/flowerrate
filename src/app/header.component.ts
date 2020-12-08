import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent  {
  name = 'Angular ' + VERSION.major;
  date=new Date();
}
