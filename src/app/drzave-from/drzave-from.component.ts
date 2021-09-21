import { Component, OnInit } from '@angular/core';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave-from',
  templateUrl: './drzave-from.component.html',
  styleUrls: ['./drzave-from.component.scss']
})
export class DrzaveFromComponent implements OnInit {


  drzave: Drzave[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

  }

  onSubmit(drzavaForm: any)
  {
    

      this.api.getDrzavePoNazivu(drzavaForm.value).subscribe((odgovor) => {

        this.drzave= odgovor;
        
  
      });

  }

}
