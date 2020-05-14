import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroes:any [] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroeService: HeroesService, private router:Router) { 

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
