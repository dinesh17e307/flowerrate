import { Component, VERSION } from '@angular/core';
import{BreakpointObserver,Breakpoints,BreakpointState} from '@angular/cdk/layout';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'my-head',
  templateUrl: './head.component.html',
  styleUrls: [ './head.component.css' ]
})
export class HeadComponent  {
[x: string]: any;
   name = 'Angular ' + VERSION.major;
  isHandset:Observable<BreakpointState>=this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver:BreakpointObserver){}
 
  date=new Date();
  opened=true;


tog(){
   
    alert(this.opened)
}
}