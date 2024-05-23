import { Component } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { TablaPeliculaComponent } from '../componentes/peliculas/tabla-pelicula/tabla-pelicula.component';
import { PeliculaListadoComponent } from '../componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { DetallePeliculaComponent } from '../componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculaComponent, PeliculaListadoComponent, DetallePeliculaComponent, NgIf],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  listaPeliculas?:Pelicula[];
  estado = 'tabla';
  peliculaParaMostrar: Pelicula = {};
 
  constructor(){
   this.listaPeliculas = [
     {
       id: 1,
       nombre: 'Duro de matar',
       tipo: 'Accion',
       fecha: '2022-05-12',
       cantidadDePublico: 5,
       fotoDeLaPelicula: '../../../assets/perfil.png'
     },
     {
       id: 2,
       nombre: 'Rapido y fogoso',
       tipo: 'Carreras',
       fecha: '2022-06-13',
       cantidadDePublico: 10,
       fotoDeLaPelicula: '../../../assets/perfil.png'
     },
     {
       id: 3,
       nombre: 'X-men',
       tipo: 'Sy-Fy',
       fecha: '2022-07-14',
       cantidadDePublico: 15,
       fotoDeLaPelicula: '../../../assets/perfil.png'
     }
   ]
  }
 
  cambiarEstado(){
   this.estado = this.estado == 'tabla' ? 'listado': 'tabla';
  }
 
  detallesPelicula($event:any)
   {
     this.peliculaParaMostrar = $event;
   }
 
 }
