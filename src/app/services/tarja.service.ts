import { Injectable } from '@angular/core';

@Injectable()
export class TarjaService {
  private tarjador: Tarja[] = [
    {
      titulo: 'PASOS PARA REALIZAR ESTA LABOR',
      descripcion:
        'POR PROCESO: Responder por el proceso de Verificación de averías, daños y anormalidades en referencia.\nPOR DOCUMENTOS: Responde por las planillas de conteo y novedades y las planillas de operaciones. \nPOR INFORMES Y/O REGISTROS: Responsabilidad sobre los informes de desempeño de los trabajadores que conforman el equipo de descarga. \nPOR EQUIPOS E IMPLEMENTO DE \nTRABAJO: Mantener en condiciones óptimas el terreno del muelle (no dejar residuos de ningún tipo en la',
      imgs: ['pasos_labor.jpg', 'pasos_1.png', 'pasos_2.png', 'pasos_3.png'],
    },
    {
      titulo: 'CUALIDADES',
      descripcion:
        'Presentar reportes sobre el numero de mercancías descargadas y almacenadas.\nllevar un control sobre la cantidad de mercancías manipuladas. \nRealizar un documento donde apunte el numero de mercancías almacenadas, el peso de cada una de estas y el lote y demás características. etc. \nConocer y caracterizar la ubicación del puesto de trabajo del tarjador en cada operación: En el cargue, en el descargue, en el almacenamiento, en bascula o zona de respeso.',
      imgs: ['cualidades.jpg'],
    },
    {
      titulo: 'FUNCIONES',
      descripcion:
        'Recibir información de los adelantos en las operaciones durante el cambio de turno. \nRegistrar de forma clara y precisa cada una de los pasos (con hora fija de operación) que se realizan durante el descargue y cargue de mercancía en la planilla de operaciones. \nRevisar la mercancía de forma minuciosa para identificar abolladuras o averías. \nRegistrar las averías o daños encontrados en la mercancía en la planilla de conteo y novedades. \nInformar periódicamente el desempeño del equipo de descargue al supervisor de operaciones.',
      imgs: ['funciones.jpg'],
    },
    {
      titulo: 'VESTUARIO',
      descripcion:
        'Vestimenta adecuada para el tarjador: cascos, \nbotas, \ngafas, \nchaleco, \n Arnés, etc...',
      imgs: [
        'vestuario.jpg',
        'vestuario_1.png',
        'vestuario_2.png',
        'vestuario_3.png',
        'vestuario_4.jpg',
        'vestuario_5.jpg',
      ],
    },
    {
      titulo: 'DOCUMENTOS',
      descripcion:
        'Documento de transporte \nManifiesto de carga \nOrden de entrega \nFactura comercial \nLista de Empaque \nFormatos de tarja',
      imgs: [
        'documentos.jpg',
        'documentos_1.png',
        'documentos_2.png',
        'documentos_3.png',
        'documentos_4.png',
        'documentos_5.png',
        'documentos_6.png',
        'documentos_7.png',
      ],
    },
  ];
  constructor() {}

  getTarjador(): Tarja[] {
    return this.tarjador;
  }

  getTarja(idx: string): Tarja {
    return this.tarjador[idx];
  }

  buscarTarja(termino: string): Tarja[] {
    const arrHeroes: Tarja[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.tarjador.length; i++) {
      const heroe = this.tarjador[i];
      const nombre = heroe.titulo.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        arrHeroes.push(heroe);
      }
    }
    return arrHeroes;
  }
}

export interface Tarja {
  titulo: string;
  descripcion: string;
  imgs: string[];
  idx?: number;
}
