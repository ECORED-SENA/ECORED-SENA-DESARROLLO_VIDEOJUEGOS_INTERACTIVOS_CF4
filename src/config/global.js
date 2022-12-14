export default {
  global: {
    componenteFormativo: 'Integración de <em>assetts</em>',
    descripcionCurso:
      'Explicación pasos de descarga, instalación, importación de assets y elementos en <em>Unity 3D</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interfaz y flujo de integración de <em>Unity 3D</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instalación de <em>Unity 3D</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Navegación en <em>Unity 3D</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Escenario y ventanas de <em>Unity 3D</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Unity 3D</em> importar elementos 3D - <em>assets</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Componer los escenarios (personajes, <em>props</em>, fondos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Iluminación de escenarios',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Luces en <em>Unity 3D</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cámaras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Efectos visuales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Interfaz',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Interfaz del videojuego',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Diseño de interfaz del videojuego',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manual interfaz de usuario',
      referencia:
        '<em>Bowers, M. (2019). Level Up – A guide to game UI (with infographic). [Web log post]. Designers.</em>',
      tipo: 'Blog',
      link: 'https://www.toptal.com/designers/gui/game-ui',
    },
    {
      tema: 'Sonidos',
      referencia: '<em>Freesound. (2021). Sound</em>.',
      tipo: 'Página web',
      link: 'https://freesound.org',
    },
    {
      tema: '<em>Unity</em>',
      referencia:
        '<em>Unity documentation. (2021). Unity Manual. Types of light. Unity.</em>',
      tipo: 'Página web',
      link: 'https://docs.unity3d.com/Manual/Lighting.html',
    },
  ],
  glosario: [
    {
      termino: '<em>Asset</em>',
      significado:
        'hace referencia a cada uno de los recursos usados para la creación de un videojuego como archivos de sonido, imágenes, animaciones, etc.',
    },
    {
      termino: 'Emociones',
      significado:
        'son un conjunto de sensaciones o sentimientos que pueden ser de alegría, tristeza, temor, etc., generados por estímulos externos que afectan el estado de ánimo.',
    },
    {
      termino: '<em>Environment</em>',
      significado:
        'se refiere al ambiente que se desarrolla a través de diferentes elementos como la iluminación, efectos visuales especiales, paleta de colores, clima, efectos atmosféricos, música y efectos de sonido; para un escenario o nivel en un videojuego.',
    },
    {
      termino: 'Estética',
      significado:
        'se relaciona con la calidad visual de una escena que depende del contraste, formas, luces, sombras, proporciones y colores que se integran para crear un equilibrio y una armonía que impacten al jugador.',
    },
    {
      termino: '<em>Gizmo</em>',
      significado:
        'son herramientas visuales que ayudan en la configuración de una escena como la orientación, el ángulo de la cámara, etc.; y en el desplazamiento, la rotación y escalado de objetos en un plano o eje tridimensional.',
    },
    {
      termino: 'Interactivo',
      significado:
        'hace referencia a aquellos elementos que le permiten al jugador interactuar con la máquina, ocasionando que sus acciones influyan directamente en el juego.',
    },
    {
      termino: 'Ortogonal',
      significado:
        'hace referencia a las líneas perpendiculares al eje o plano tridimensional sobre el cual se está trabajando.',
    },
    {
      termino: 'Perspectiva',
      significado:
        'se refiere a la representación de objetos en 3D sobre una superficie plana con el objetivo de simular su volumen, posición, orientación, profundidad, etc., a la vista del espectador.',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'Son escenas o acciones preestablecidas o programadas con anterioridad en el videojuego y se desarrollan independientemente de lo que haga el jugador.',
    },
  ],
  referencias: [
    {
      referencia:
        'Azevedo, F. (2019). <em>Resident Evil 2</em>: Ubicación de todo Mr.Raccoon. IGN Brasil.',
      link:
        'https://br.ign.com/resident-evil-2-remake-1/70144/news/resident-evil-2-localizacao-de-todos-mr-raccoon',
    },
    {
      referencia:
        '<em>HDWallSource. (s.f.). Download Unravel 2 HD Wallpaper 68858. hdwallsource.com.</em>',
      link:
        'https://hdwallsource.com/unravel-2-hd-wallpaper-68858.html/unravel-2-hd-wallpaper-68858',
    },
    {
      referencia:
        'Herrera, K. (2013, Febrero 13).  <em>Silent Hill: An Old Friend’s Downfall. [Web log post]. Gameinformer.</em>',
      link:
        'https://www.gameinformer.com/b/features/archive/2013/02/13/silent-hill-an-old-friend-s-downfall.aspx',
    },
    {
      referencia: 'Interfaceingame. (s.f.). Death. Games.',
      link: 'https://interfaceingame.com/screenshots/hollow-knight-death-2/',
    },
    {
      referencia: 'Vidaextra. (2013). <em>Pikmin 3</em>: análisis',
      link: 'https://www.vidaextra.com/analisis/pikmin-3-analisis',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Luz Aida Quintero Velásquez',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
}
