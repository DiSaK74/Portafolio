import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from './../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(
    public _infoPagina: InfoPaginaService
) { }

  ngOnInit() {
    console.log('Footer info pagina:', this._infoPagina.info.email);
  }

}
