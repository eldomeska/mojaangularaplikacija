import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit, OnDestroy  {

  brojevi: number[] = [1, 2, 3, 4, 5];
  prikaziUl: boolean = true;

  broj: number= 1;


  constructor() { }

  ngOnInit() {
   console.log(this.brojevi);
  }

  ngOnDestroy() {

  }


}
