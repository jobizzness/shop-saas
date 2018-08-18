import { Component } from '@angular/core';
import { MDCToolbar, MDCToolbarFoundation } from '@material/toolbar';
import { MDCPersistentDrawer, MDCPersistentDrawerFoundation, util } from '@material/drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  showDrawer: Boolean = true;

  constructor(){}

  ngAfterViewInit(){
    const toolbar = new MDCToolbar(document.querySelector('.mdc-toolbar'));
  }
}
