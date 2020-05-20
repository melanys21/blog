import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { TarjaService, Tarja } from 'src/app/services/tarja.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Tarja[];
  constructor(private service: TarjaService, private router: Router) {
    this.heroes = this.service.getTarjador();
  }

  ngOnInit(): void {}

  verHeroe(idx: number) {
    this.router.navigate(['blog', idx]);
  }
}
