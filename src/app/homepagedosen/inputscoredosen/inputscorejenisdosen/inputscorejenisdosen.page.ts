import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inputscorejenisdosen',
  templateUrl: './inputscorejenisdosen.page.html',
  styleUrls: ['./inputscorejenisdosen.page.scss'],
})
export class InputscorejenisdosenPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit(
   
  ) {
  }

  public form = [
    { val: 'Score 1', scor:'25', isChecked: false },
    { val: 'Score 2', scor:'-25', isChecked: false },
    { val: 'Score 3', scor:'-25',isChecked: false },

  ];

  
}
