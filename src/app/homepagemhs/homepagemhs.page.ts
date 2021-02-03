import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepagemhs',
  templateUrl: './homepagemhs.page.html',
  styleUrls: ['./homepagemhs.page.scss'],
})
export class HomepagemhsPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('/login');
  }
}
