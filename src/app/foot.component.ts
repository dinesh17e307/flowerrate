import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-foot',
  templateUrl: './foot.component.html',
  styleUrls: [ './foot.component.css' ]
})
export class FootComponent  {
  name = 'Angular ' + VERSION.major;
}
