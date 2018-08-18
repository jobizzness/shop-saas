import { Component } from '@angular/core';
import { MDCToolbar, MDCToolbarFoundation } from '@material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    
    
    
  }

  ngAfterViewInit(){
    const toolbar = new MDCToolbar(document.querySelector('.mdc-toolbar'));
    console.log(toolbar);
  }
}
