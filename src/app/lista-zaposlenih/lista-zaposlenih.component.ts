import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../servisi/api.service';
import { Zaposleni } from '../zaposleni';

@Component({
  selector: 'app-lista-zaposlenih',
  templateUrl: './lista-zaposlenih.component.html',
  styleUrls: ['./lista-zaposlenih.component.scss']
})
export class ListaZaposlenihComponent implements OnInit {

  zaposleni: Zaposleni[]=[];

  zaposleniForm: FormGroup = this.fb.group({

    ime:'',
    starost: 0,
    radnoMjesto: ''

  });

  constructor(private fb: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {

    this.api.getZaposleni().subscribe((odgovor)=>{ this.zaposleni = odgovor});
  }

}
