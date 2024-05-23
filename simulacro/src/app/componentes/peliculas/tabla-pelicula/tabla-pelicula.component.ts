import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {

  @Input() listaPeliculasRecibida?:Pelicula[];
  @Output() detallesPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor(){}

  obtenerPelicula(pelicula:Pelicula)
  {
    this.detallesPelicula.emit(pelicula);
  }

}
