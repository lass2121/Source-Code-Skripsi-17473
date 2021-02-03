import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepagedosen',
  templateUrl: './homepagedosen.page.html',
  styleUrls: ['./homepagedosen.page.scss'],
})
export class HomepagedosenPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  inputScore(){
    this.navCtrl.navigateForward('homepagedosen/inputscoredosen');
  }

  monitoring(){
    this.navCtrl.navigateForward('homepagedosen/monitoringdosen');
  }

  goBack(){
    this.navCtrl.navigateBack('/login');
  }
}
