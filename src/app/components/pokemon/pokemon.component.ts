import { Component, Input } from '@angular/core';
import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon | undefined;
}
