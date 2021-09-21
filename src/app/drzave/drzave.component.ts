import { Component, OnInit } from '@angular/core';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.scss']
})
export class DrzaveComponent implements OnInit {


  listaDrazava: Drzave[] = [];
  listaDrazavaZaDisplay: Drzave[] = [];
  rastuciPoredak: boolean = true;
  ukupanBrojStanovnika: number = 0;
  ukupnaPovrsina: number = 0;
  terminZaPretragu : string = '';
  regije: string[] = [];
  greska: string = '';
  uspjeh: string = '';


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getDrzave().subscribe((odgovor) => {

      this.listaDrazava = odgovor;
      this.listaDrazavaZaDisplay = odgovor;
      this.uspjeh = "Uspješno ste učitali podatke";
      
      this.regije=[...new Set(this.listaDrazava.map((drzava) => drzava.region))].filter((regije)=> regije );



      this.ukupnoSvega();

    }, (greska) => { this.greska = 'Greska u radu: '+ greska.status; });

  }

  ukupnoSvega()
  {

    this.ukupanBrojStanovnika = this.listaDrazavaZaDisplay.reduce(
      (ukupnostanovnika, drzava) => {
        ukupnostanovnika += drzava.population;

        return ukupnostanovnika;
      }, 0);


    this.ukupnaPovrsina = this.listaDrazavaZaDisplay.reduce(
      (ukupnopovrsina, drzava) => {
        ukupnopovrsina += drzava.area;

        return ukupnopovrsina;
      }, 0);

  }

  sortiraj() {

    if (this.rastuciPoredak) {

      this.listaDrazava.sort((drzavaA, drzavaB) => {

        if (drzavaA.name < drzavaB.name)
          return -1;
        if (drzavaA.name > drzavaB.name)
          return 1;
        return 0

      });

    }
    else {

      this.listaDrazava.sort((drzavaA, drzavaB) => {

        if (drzavaA.name > drzavaB.name)
          return -1;
        if (drzavaA.name < drzavaB.name)
          return 1;
        return 0

      });

    }

    this.rastuciPoredak = !this.rastuciPoredak;

  }

  sortirajPoBrojuStanovnika() {

    if (this.rastuciPoredak) {

      this.listaDrazava.sort((a, b) => a.population - b.population);

    }
    else {

      this.listaDrazava.sort((a, b) => b.population - a.population);

    }

    this.rastuciPoredak = !this.rastuciPoredak;



  }

  filtriraj()
  {

    this.listaDrazavaZaDisplay = this.listaDrazava.filter((drzava)=>  drzava.name.toLocaleLowerCase().includes( this.terminZaPretragu.toLocaleLowerCase()) );

    this.ukupnoSvega();

  }

  ponistiPretragu()
  {
    this.listaDrazavaZaDisplay = this.listaDrazava;
    this.terminZaPretragu = '';

    this.ukupnoSvega();
  }

  pretraga(event: any )
  {

    this.listaDrazavaZaDisplay = this.listaDrazava.filter((drzava) => {return  drzava.name.toLocaleLowerCase().includes(event.toLocaleLowerCase()) });
   
    this.ukupnoSvega();
  }

  filterPoRegiji(regija: string)
  {

    this.listaDrazavaZaDisplay = this.listaDrazava.filter((drzava) =>  drzava.region === regija );

    this.ukupnoSvega();

  }

}
