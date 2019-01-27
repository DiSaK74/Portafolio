import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from './../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
              public _infoPagina: InfoPaginaService
  ) { }

  ngOnInit() {
    console.log('Header info pagina:', this._infoPagina.info.email);
  }

}
