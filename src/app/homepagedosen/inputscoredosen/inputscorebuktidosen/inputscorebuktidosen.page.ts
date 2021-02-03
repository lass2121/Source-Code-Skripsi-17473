import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputscorebuktidosen',
  templateUrl: './inputscorebuktidosen.page.html',
  styleUrls: ['./inputscorebuktidosen.page.scss'],
})
export class InputscorebuktidosenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Score 1', scor:'25', isChecked: false },
    { val: 'Score 2', scor:'-25', isChecked: false },
    { val: 'Score 3', scor:'-25',isChecked: false },

  ];

  test(){
    console.log("kekw");
  }

  upload(){
    console.log("kamera/upload");
  }

  submit(){
    console.log("sucess");
  }
}
