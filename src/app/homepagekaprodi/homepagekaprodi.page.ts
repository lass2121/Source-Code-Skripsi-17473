import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepagekaprodi',
  templateUrl: './homepagekaprodi.page.html',
  styleUrls: ['./homepagekaprodi.page.scss'],
})
export class HomepagekaprodiPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  inputMaster(){
    this.navCtrl.navigateForward('homepagekaprodi/inputmaster');
  }

  inputScore(){
    this.navCtrl.navigateForward('homepagekaprodi/inputscorekaprodi');
  }

  monitoring(){
    this.navCtrl.navigateForward('homepagekaprodi/monitoringkaprodi');
  }

  goBack(){
    this.navCtrl.navigateBack('/login');
  }
}
