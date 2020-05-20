import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroeComponent = class HeroeComponent {
    constructor(activatedRoute, service) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.activatedRoute.params.subscribe((params) => {
            // console.log(params);
            // console.log(params['id']);
            this.heroe = this.service.getTarja(params['id']);
        });
    }
    ngOnInit() { }
};
HeroeComponent = __decorate([
    Component({
        selector: 'app-heroe',
        templateUrl: './heroe.component.html',
    })
], HeroeComponent);
export { HeroeComponent };
//# sourceMappingURL=heroe.component.js.map