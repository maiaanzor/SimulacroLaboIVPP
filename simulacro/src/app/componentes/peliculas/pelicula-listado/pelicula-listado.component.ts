import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pelicula-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.css'
})
export class PeliculaListadoComponent {
  @Input() listaPeliculasRecibida?:any[];
  @Output() detallesPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  obtenerPelicula(pelicula:Pelicula)
  {
    this.detallesPelicula.emit(pelicula);
  }
}