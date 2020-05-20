import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let HeroeTarjetaComponent = class HeroeTarjetaComponent {
    constructor() {
        this.heroeSeleccionado = new EventEmitter();
    }
    ngOnInit() {
        console.log(this.heroe);
    }
    verHeroe() {
        this.heroeSeleccionado.emit(this.index);
    }
};
__decorate([
    Input()
], HeroeTarjetaComponent.prototype, "heroe", void 0);
__decorate([
    Input()
], HeroeTarjetaComponent.prototype, "index", void 0);
__decorate([
    Output()
], HeroeTarjetaComponent.prototype, "heroeSeleccionado", void 0);
HeroeTarjetaComponent = __decorate([
    Component({
        selector: 'app-heroe-tarjeta',
        templateUrl: './heroe-tarjeta.component.html',
        styles: [],
    })
], HeroeTarjetaComponent);
export { HeroeTarjetaComponent };
//# sourceMappingURL=heroe-tarjeta.component.js.map