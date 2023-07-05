import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Call pokemon api
    this.route.queryParams.subscribe(params => {
      this.callPokemonApi(params['id']);

    }
    );

  }

  next() {
    if (this.pokemon)
      this.router.navigate(['/route2'], { queryParams: { id: this.pokemon.id + 1 } });
  }

  back() {
    if (this.pokemon)
      this.router.navigate(['/route2'], { queryParams: { id: this.pokemon.id - 1 } });
  }

  callPokemonApi(id: string | null): void {
    // Call pokeapi
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        // Handle the data here
        this.pokemon = data;
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      });
  }

}
