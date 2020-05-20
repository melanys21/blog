import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TarjaService = class TarjaService {
    constructor() {
        this.tarjador = [
            {
                titulo: 'PASOS PARA REALIZAR ESTA LABOR',
                descripcion: 'POR PROCESO: Responder por el proceso de Verificación de averías, daños y anormalidades en referencia.\nPOR DOCUMENTOS: Responde por las planillas de conteo y novedades y las planillas de operaciones. \nPOR INFORMES Y/O REGISTROS: Responsabilidad sobre los informes de desempeño de los trabajadores que conforman el equipo de descarga. \nPOR EQUIPOS E IMPLEMENTO DE \nTRABAJO: Mantener en condiciones óptimas el terreno del muelle (no dejar residuos de ningún tipo en la',
                imgs: ['pasos_labor.jpg', 'pasos_1.png', 'pasos_2.png', 'pasos_3.png'],
            },
            {
                titulo: 'CUALIDADES',
                descripcion: 'Presentar reportes sobre el numero de mercancías descargadas y almacenadas.\nllevar un control sobre la cantidad de mercancías manipuladas. \nRealizar un documento donde apunte el numero de mercancías almacenadas, el peso de cada una de estas y el lote y demás características. etc. \nConocer y caracterizar la ubicación del puesto de trabajo del tarjador en cada operación: En el cargue, en el descargue, en el almacenamiento, en bascula o zona de respeso.',
                imgs: ['cualidades.jpg'],
            },
            {
                titulo: 'FUNCIONES',
                descripcion: 'Recibir información de los adelantos en las operaciones durante el cambio de turno. \nRegistrar de forma clara y precisa cada una de los pasos (con hora fija de operación) que se realizan durante el descargue y cargue de mercancía en la planilla de operaciones. \nRevisar la mercancía de forma minuciosa para identificar abolladuras o averías. \nRegistrar las averías o daños encontrados en la mercancía en la planilla de conteo y novedades. \nInformar periódicamente el desempeño del equipo de descargue al supervisor de operaciones.',
                imgs: ['funciones.jpg'],
            },
            {
                titulo: 'VESTUARIO',
                descripcion: 'Vestimenta adecuada para el tarjador \ncascos \nbotas \ngafas \nchaleco',
                imgs: [
                    'vestuario.jpg',
                    'vestuario_1.png',
                    'vestuario_2.png',
                    'vestuario_3.png',
                ],
            },
        ];
    }
    getTarjador() {
        return this.tarjador;
    }
    getTarja(idx) {
        return this.tarjador[idx];
    }
    buscarTarja(termino) {
        const arrHeroes = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.tarjador.length; i++) {
            const heroe = this.tarjador[i];
            const nombre = heroe.descripcion.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroe.idx = i;
                arrHeroes.push(heroe);
            }
        }
        return arrHeroes;
    }
};
TarjaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TarjaService);
export { TarjaService };
//# sourceMappingURL=tarja.service.js.map