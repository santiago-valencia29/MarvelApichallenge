import { Heroe } from '../models/heroe.model';

export let heroes: Heroe[] = [
    {
        id: 1,
        nombre: 'SpiderMan',
        descripcion: 'Es un superhéroe decidido, justiciero, atlético, valiente, astuto. Aparece en los momentos indicados para cumplir con su responsabilidad. Tiene un marcado valor por las personas y una debilidad especial por los más débiles.',
        comics: [
        {
            id: 1,
            nombre: 'Marvels (1994)',
            descripcion: 'Marvels sigue la pista de un fotográfo de guerra desde la II Guera Mundial y la llegada de los primeros superhéroes del Universo Marvel hasta el inicio de la edad de Plata, con el origen de los 4 Fantásticos y los Vengadores.',
            imagen: 'assets/comics-img/marvels.jpg'
        },
        {
            id: 6,
            nombre: 'El chico que coleccionaba Spider-man (1984)',
            descripcion: 'Contiene una de las mejores historias de Spider-man. Roger Stern y Ron Frenz narraban el encuentro entre el trepamuros y uno de sus mayores fans, un muchacho llamado Tim Harrison, el cual padece una enfermedad terminal. Peter la hace una visita en secreto, a modo de último deseo, ya que el pobre chaval tiene los días contados.',
            imagen: 'assets/comics-img/spider-comic.png'
        }],
        imagen: 'assets/heroes-img/spiderman.jpg'
    },
    {
        id: 2,
        nombre: 'Ironman',
        descripcion: 'un multimillonario magnate empresarial estadounidense, playboy e ingenioso científico, quien sufre una grave lesión en el pecho durante un secuestro. ... Él usa el traje y las versiones sucesivas para proteger al mundo como Iron Man.',
        comics: [{
            id: 2,
            nombre: 'Civil War (2006 - 2007)',
            descripcion: 'La trama giraba en torno a una guerra civil de superhéroes debido al control que Washington impone sobre la comunidad de "súpers" tras un fiasco con montones de muertos civiles.',
            imagen: 'assets/comics-img/civil-war.jpg'
        },
        {
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        }
        ],
        imagen: 'assets/heroes-img/ironman.jpg'
    },
    {
        id: 3,
        nombre: 'Capitán América',
        descripcion: 'Fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra.',
        comics:[{
            id: 10,
            nombre: 'Capitán América: El soldado de Invierno (2005)',
            descripcion: 'La etapa de Ed Brubaker supone una lectura casi obligatoria si os gustaron las últimas películas del Capitán América. De hecho, la película de Capitán América: Soldado de Invierno es una adaptación bastante buena de este cómic. Hacednos caso, vais a flipar con él.',
            imagen: 'assets/comics-img/soldado-invierno.jpg'
        },{
            id: 2,
            nombre: 'Civil War (2006 - 2007)',
            descripcion: 'La trama giraba en torno a una guerra civil de superhéroes debido al control que Washington impone sobre la comunidad de "súpers" tras un fiasco con montones de muertos civiles.',
            imagen: 'assets/comics-img/civil-war.jpg'
        }],
        imagen: 'assets/heroes-img/capitan-america.jpg'
    },
    {
        id: 4,
        nombre: 'Thor',
        descripcion: 'Es un superhéroe decidido, justiciero, atlético, valiente, astuto. Aparece en los momentos indicados para cumplir con su responsabilidad. Tiene un marcado valor por las personas y una debilidad especial por los más débiles.',
        comics: [{
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        }],
        imagen: 'assets/heroes-img/thor.jpg'
    },
    {
        id: 5,
        nombre: 'Deadpool',
        descripcion: 'Es un personaje ficticio, mercenario, supervillano​​ y antihéroe',
        comics: [],
        imagen: 'assets/heroes-img/deadpool.jpg'
    },
    {
        id: 6,
        nombre: 'Hulk',
        descripcion: 'Un ser humanoide enorme de piel verde, corpulento y musculoso que posee una gran fortaleza física',
        comics: [{
            id: 9,
            nombre: 'Planeta Hulk (2006)',
            descripcion: 'Hulk tenía que lidiar con la traición de sus aliados, quienes le habían mandado al espacio. El gigante verde, lejos de aterrizar en un edén pacífico, acababa en un erial desolado, poblado por sangrientos alienígenas, deseosos de convertirle en su nuevo gladiador.',
            imagen: 'assets/comics-img/hulk.jpg'
        },
        {
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        }],
        imagen: 'assets/heroes-img/hulk.jpg'
    }, {
        id: 7,
        nombre: 'Viuda Negra',
        descripcion: 'Es una extraordinaria gimnasta, atleta y luchadora cuerpo a cuerpo. Ha recibido entrenamiento en aikido, judo, karate, boxeo y artes marciales. ',
        comics: [{
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        },
        {
            id: 2,
            nombre: 'Civil War (2006 - 2007)',
            descripcion: 'La trama giraba en torno a una guerra civil de superhéroes debido al control que Washington impone sobre la comunidad de "súpers" tras un fiasco con montones de muertos civiles.',
            imagen: 'assets/comics-img/civil-war.jpg'
        }],
        imagen: 'assets/heroes-img/viuda-negra.jpg'
    }, {
        id: 8,
        nombre: 'Doctor Strange',
        descripcion: 'sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas.',
        comics: [{
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        }],
        imagen: 'assets/heroes-img/doctor-strange.jpg'
    }, {
        id: 9,
        nombre: 'Logan',
        descripcion: 'Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. ',
        comics: [{
            id: 4,
            nombre: 'Lobezno Honor (1982)',
            descripcion: 'La primera serie de cómics de Lobezno (Wolverine). Chris Claremont y Frank Miller se aliaron para narrar esta historia ambientada en Japón con Logan como protagonista. Gracias a su éxito, tiempo después el mutante de las garras ganaría más miniseries y proyectos en solitario. ',
            imagen: 'assets/comics-img/logan.jpg'
        }],
        imagen: 'assets/heroes-img/logan.jpg'
    }, {
        id: 10,
        nombre: 'Ojo de Halcón',
        descripcion: 'Con sus habilidades de arquero aumentando los poderes superhumanos de sus socios.',
        comics: [{
            id: 5,
            nombre: 'Ojo de Halcón (2012 - 2015)',
            descripcion: 'La trama gira en torno a qué hace Clint Barton, Ojo de Halcón, cuando no está luchando con los Vengadores. Como ya os contamos en la reseña de Ojo de Halcón, estamos ante uno de los cómics más importantes de Marvel en su etapa reciente.',
            imagen: 'assets/comics-img/ojodehalcon.jpg'
        },
        {
            id: 3,
            nombre: 'El guantelete del Infinito (1991)',
            descripcion: 'Una mini-serie de seis números que narraba como Thanos, el titán loco, reunía las 6 gemas del infinito en un solo guante, conviertiéndose en la deidad más poderosa de la creación. El genocida nihilista pronto atraerá la atención de todos los poderes del cosmos, incluyendo a héroes y villanos de todo el Universo Marvel.',
            imagen: 'assets/comics-img/guantelete.jpg'
        }],
        imagen: 'assets/heroes-img/ojo-de-halcon.jpg'
    }, {
        id: 11,
        nombre: 'Jean Grey',
        descripcion: 'es una mutante nivel Omega que posee poderes telepáticos y telequineticos. ... También fue la huésped de la Fuerza Fénix, una poderosa entidad cósmica.',
        comics: [{
            id: 13,
            nombre: 'La muerte de Fénix (1980)',
            descripcion: 'una serie de historietas que narraban el ascenso de Jean Grey como la Fuerza Fénix (una poderosa fuerza cósmica, dadora de vida y portadora de destrucción por igual). Tras perder el control de sus poderes, Jean se sometía a su lado oscuro, convirtiéndose en la Fénix Oscura.',
            imagen: 'assets/comics-img/jean-grey.jpg'
        }],
        imagen: 'assets/heroes-img/jean-grey.jpg'
    }, {
        id: 12,
        nombre: 'Tormenta',
        descripcion: 'Es un mutante imbuido con el poder para manipular las fuerzas elementales que presiden el clima, además de otros fenómenos atmosféricos.',
        comics: [{
            id: 11,
            nombre: 'La Era de Apocalipsis (1995-96)',
            descripcion: 'la trama gira en torno a una realidad paralela y distópica, en la que Xavier no formó los X-men, sino que fue Magneto. Por desgracia, Magneto no vive en un mundo idílico, sino en uno dominado por el tirano En Sabah Nur, Apocalipsis, que tiene sojuzgada a la raza humana. Solo los X-men se interponen entre él y la dominación global.',
            imagen: 'assets/comics-img/apocalipsis.jpg'
        }],
        imagen: 'assets/heroes-img/tormenta.jpg'
    }, {
        id: 13,
        nombre: 'Daredevil',
        descripcion: ' Diablo Defensor, el Hombre sin Miedo, El Abogado de la Cocina del Infierno, un heroe oscuro',
        comics: [{
            id: 7,
            nombre: 'Daredevil Born Again (1986)',
            descripcion: 'El cómic de Marvel que cambió la percepción de los superhéroes entre el público y que renovó desde dentro afuera al Hombre sin Miedo. La trama de este cómic narra lo que pasa cuando la identidad secreta de Daredevil, Matt Murdock, es descubierta por Kingpin, quien pone en marcha una complicada trama para matarlo.',
            imagen: 'assets/comics-img/daredevil.jpg'
        }],
        imagen: 'assets/heroes-img/daredevil.jpg'
    }, {
        id: 14,
        nombre: 'Ciclope',
        descripcion: 'es un mutante con la capacidad de proyectar potentes explosiones de fuerza a través de sus ojos.',
        comics: [{
            id: 13,
            nombre: 'La muerte de Fénix (1980)',
            descripcion: 'una serie de historietas que narraban el ascenso de Jean Grey como la Fuerza Fénix (una poderosa fuerza cósmica, dadora de vida y portadora de destrucción por igual). Tras perder el control de sus poderes, Jean se sometía a su lado oscuro, convirtiéndose en la Fénix Oscura.',
            imagen: 'assets/comics-img/jean-grey.jpg'
        },{
            id: 11,
            nombre: 'La Era de Apocalipsis (1995-96)',
            descripcion: 'la trama gira en torno a una realidad paralela y distópica, en la que Xavier no formó los X-men, sino que fue Magneto. Por desgracia, Magneto no vive en un mundo idílico, sino en uno dominado por el tirano En Sabah Nur, Apocalipsis, que tiene sojuzgada a la raza humana. Solo los X-men se interponen entre él y la dominación global.',
            imagen: 'assets/comics-img/apocalipsis.jpg'
        }],
        imagen: 'assets/heroes-img/ciclope.jpg'
    }, {
        id: 15,
        nombre: 'La Cosa',
        descripcion: 'Resistencia física muy elevada. Experto en combate cuerpo a cuerpo.',
        comics: [],
        imagen: 'assets/heroes-img/la-cosa.jpg'
    }, {
        id: 16,
        nombre: 'Falcon',
        descripcion: 'Usa alas mecánicas para volar, y tiene un control telepático y empático limitado sobre las aves.',
        comics: [{
            id: 12,
            nombre: 'Ultrón Ilimitado (1999)',
            descripcion: '. En él se narra el regreso de Ultron y su lucha con los Vengadores, a la vez que explican algunos detalles nunca narrados de su creación. Entre ellos, los motivos reales de su odio a Hank Pym, su creador en los cómics.',
            imagen: 'assets/comics-img/eraultron.jpeg'
        }],
        imagen: 'assets/heroes-img/falcon.jpg'
    }, {
        id: 17,
        nombre: 'Elektra',
        descripcion: 'Es un asesina de ascendencia griega altamente entrenado que maneja un par de sais con cuchillas como sus armas de marca.',
        comics: [],
        imagen: 'assets/heroes-img/elektra.jpg'
    }, {
        id: 18,
        nombre: 'Rogue',
        descripcion: 'Tiene la capacidad de absorber (y, a veces también eliminar) involuntariamente los recuerdos, la fuerza física y los superpoderes de cualquier persona que toque.',
        comics: [{
            id: 11,
            nombre: 'La Era de Apocalipsis (1995-96)',
            descripcion: 'la trama gira en torno a una realidad paralela y distópica, en la que Xavier no formó los X-men, sino que fue Magneto. Por desgracia, Magneto no vive en un mundo idílico, sino en uno dominado por el tirano En Sabah Nur, Apocalipsis, que tiene sojuzgada a la raza humana. Solo los X-men se interponen entre él y la dominación global.',
            imagen: 'assets/comics-img/apocalipsis.jpg'
        }],
        imagen: 'assets/heroes-img/picara.jpg'
    }, {
        id: 19,
        nombre: 'Iceman',
        descripcion: 'El hombre de hielo es un mutante con la capacidad de manipular el hielo y el frío al congelar el vapor de agua que lo rodea.',
        comics: [{
            id: 11,
            nombre: 'La Era de Apocalipsis (1995-96)',
            descripcion: 'la trama gira en torno a una realidad paralela y distópica, en la que Xavier no formó los X-men, sino que fue Magneto. Por desgracia, Magneto no vive en un mundo idílico, sino en uno dominado por el tirano En Sabah Nur, Apocalipsis, que tiene sojuzgada a la raza humana. Solo los X-men se interponen entre él y la dominación global.',
            imagen: 'assets/comics-img/apocalipsis.jpg'
        }],
        imagen: 'assets/heroes-img/iceman.jpg'
    }, {
        id: 20,
        nombre: 'Quicksilver',
        descripcion: 'es un mutante nacido con una estructura genética que le concede habilidades especiales, que le diferencian de los seres humanos. Con la pubertad desarrolló la capacidad moverse a supervelocidad alcanzando velocidades de hasta 280 kilómetros por hora.',
        comics: [{
            id: 12,
            nombre: 'Ultrón Ilimitado (1999)',
            descripcion: '. En él se narra el regreso de Ultron y su lucha con los Vengadores, a la vez que explican algunos detalles nunca narrados de su creación. Entre ellos, los motivos reales de su odio a Hank Pym, su creador en los cómics.',
            imagen: 'assets/comics-img/eraultron.jpeg'
        }],
        imagen: 'assets/heroes-img/quicksilver.jpg'
    }
]