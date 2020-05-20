import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { TarjaService, Tarja } from 'src/app/services/tarja.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: Tarja;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TarjaService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params);
      // console.log(params['id']);
      this.heroe = this.service.getTarja(params['id']);
    });
  }

  ngOnInit(): void {}
}
