import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-foot',
  templateUrl: './foot.component.html',
  styleUrls: [ './foot.component.css' ]
})
export class FootComponent  {
  name = 'Angular ' + VERSION.major;
   ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
