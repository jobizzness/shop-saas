import { Component, ViewChild } from '@angular/core';
import { MDCToolbar, MDCToolbarFoundation } from '@material/toolbar';
// import { MDCPersistentDrawer, MDCPersistentDrawerFoundation, util } from '@material/drawer';
import { MDCMenu } from '@material/menu';

@Component({
  selector: 'biness-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  @ViewChild('userMenu') userMenu;
  title = 'app';
  showDrawer: Boolean = true;
  menu = null;

  constructor(){}

  ngAfterViewInit(){
    const toolbar = new MDCToolbar(document.querySelector('.mdc-toolbar'));
    this.menu = new MDCMenu(this.userMenu.nativeElement);
  }

  toggleMenu($event){
    this.menu.open = !this.menu.open
  }
}
