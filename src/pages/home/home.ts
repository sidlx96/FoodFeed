import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireDatabase } from "angularfire2/database"; 

import { Observable } from 'rxjs/Observable';
import {DetailsPage} from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsRef$: Observable<any[]>;

  constructor(private database: AngularFireDatabase,public navCtrl: NavController) {
    this.itemsRef$ = this.database.list('/items-feed').valueChanges();  

  }
  navigate(){
    this.navCtrl.push(DetailsPage);
  }


}
