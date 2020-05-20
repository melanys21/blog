import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = class HeroesComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.heroes = this.service.getTarjador();
    }
    verHeroe(idx) {
        this.router.navigate(['blog', idx]);
    }
};
HeroesComponent = __decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: 'heroes.component.html',
        styles: [],
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map