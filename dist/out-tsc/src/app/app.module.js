import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { HeroesService } from './services/heroes.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// Pipes
import { ContentTextPipe } from './pipes/content-text.pipe';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            HomeComponent,
            AboutComponent,
            HeroesComponent,
            HeroeComponent,
            BuscarComponent,
            HeroeTarjetaComponent,
            ContentTextPipe,
            FooterComponent,
        ],
        imports: [BrowserModule, APP_ROUTING],
        providers: [HeroesService, ContentTextPipe],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map