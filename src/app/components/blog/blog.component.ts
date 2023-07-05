import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Call pokemon api
    this.route.params.subscribe(params => {
      console.log(params['id']);

    }
    );

  }

  callPokemonApi(id: string | null): void {
    // Call pokeapi
    console.log(id)
  }

}
