import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputscorebuktikaprodi',
  templateUrl: './inputscorebuktikaprodi.page.html',
  styleUrls: ['./inputscorebuktikaprodi.page.scss'],
})
export class InputscorebuktikaprodiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Score 1', scor:'25', isChecked: false },
    { val: 'Score 2', scor:'-25', isChecked: false },
    { val: 'Score 3', scor:'-25',isChecked: false },

  ];

  upload(){
    console.log("kamera/upload");
  }

  submit(){
    console.log("sucess");
  }
}
