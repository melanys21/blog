import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BuscarComponent = class BuscarComponent {
    constructor(activatedRoute, service, router) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.termino = params['termino'];
            this.heroes = this.service.buscarHeroe(this.termino);
        });
    }
    verHeroe(idx) {
        this.router.navigate(['heroe', idx]);
    }
};
BuscarComponent = __decorate([
    Component({
        selector: 'app-buscar',
        templateUrl: './buscar.component.html',
    })
], BuscarComponent);
export { BuscarComponent };
//# sourceMappingURL=buscar.component.js.map