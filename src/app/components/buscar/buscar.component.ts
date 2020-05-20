import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { TarjaService } from 'src/app/services/tarja.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  termino: string;
  heroes: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TarjaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.service.buscarTarja(this.termino);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['blog', idx]);
  }
}
