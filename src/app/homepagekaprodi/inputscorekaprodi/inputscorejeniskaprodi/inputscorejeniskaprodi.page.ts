import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputscorejeniskaprodi',
  templateUrl: './inputscorejeniskaprodi.page.html',
  styleUrls: ['./inputscorejeniskaprodi.page.scss'],
})
export class InputscorejeniskaprodiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Score 1', scor:'25', isChecked: false },
    { val: 'Score 2', scor:'-25', isChecked: false },
    { val: 'Score 3', scor:'-25',isChecked: false },

  ];
}
