import { Component, Input } from '@angular/core';
import { Pelicula } from '../../../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() obtenerPelicula:Pelicula={};
}
