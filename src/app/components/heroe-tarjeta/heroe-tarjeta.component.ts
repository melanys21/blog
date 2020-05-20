import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarja } from 'src/app/services/tarja.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.heroe);
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.index);
  }
}
