import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from './../interfaces/info-equipo.interface';
import { InfoProductos } from '../interfaces/info-productos.interface';
import { InfoProductosIdx } from '../interfaces/info-productos-idx.interface';
import { Equipo } from '../interfaces/equipo.interface';
import { Producto } from './../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina = {};
  public equipo: Equipo[] = [];
  public productos: InfoProductos[] = [];
  public productos_idx: InfoProductosIdx[] = [];
  public cargada = false;

  public cargando_productos = true;

  constructor(private http: HttpClient) {
    console.log('Servicio de pagina cargado');
    this.cargaPagina();
    this.cargaEquipo();
    this.cargaProductos();
    this.cargaProductos_idx();

  }

  cargaPagina() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      (res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
        console.log('Respuesta llamada info', res);
        console.log('Titulo:', res['titulo']);
        console.log('Titulo:', this.info.titulo);
      }
    );
  }

  cargaEquipo() {
    this.http.get('assets/data/data-equipo.json').subscribe(
      (res: InfoEquipo) => {
        this.equipo = res.equipo;
        console.log('Respuesta llamada equipo', res);
        console.log('Equipo:', this.equipo);
      }
    );
  }

  cargaProductos() {
    this.http.get('assets/data/data-productos.json').subscribe(
      (res: InfoProductos[]) => {
        this.productos = res;
        this.cargando_productos = false;
        console.log('Respuesta llamada productos', res);
        console.log('Productos:', this.productos);
      }
    );
  }

  cargaProductos_idx() {
    this.http.get('assets/data/data-productos-idx.json').subscribe(
      (res: InfoProductosIdx[]) => {
        this.productos_idx = res;
        console.log('Respuesta llamada productos idx', res);
        console.log('Productos Idx:', this.productos_idx);
      }
    );
  }
}
