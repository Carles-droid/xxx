
//JSON que incluye algunas bandas de Dave Grohl

const bandasDaveGrohl = {
  nombreArtista: "Dave Grohl",
  bandas: [
    {
      nombre: "Nirvana",
      rol: "Baterista",
      pais: "Estados Unidos",
      añoFormacion: 1987,
      genero: "Grunge / Rock Alternativo",
      albumesNotables: [
        {
          titulo: "Nevermind",
          año: 1991,
          cancionesDestacadas: ["Smells Like Teen Spirit", "Territorial Pissing", "Lithium"]
        },
        {
          titulo: "In Utero",
          año: 1993,
          cancionesDestacadas: ["Heart-Shaped Box", "Rape Me", "All Apologies"]
        }
      ],
      estado: "Disuelta"
    },
    {
      nombre: "Foo Fighters",
      rol: "Vocalista / Guitarrista / Fundador",
      pais: "Estados Unidos",
      añoFormacion: 1994,
      genero: "Rock Alternativo / Post-Grunge",
      albumesNotables: [
        {
          titulo: "The Colour and the Shape",
          año: 1997,
          cancionesDestacadas: ["Everlong", "My Hero", "Doll"]
        },
        {
          titulo: "Wasting Light",
          año: 2011,
          cancionesDestacadas: ["Rope", "Walk", "These Days"]
        }
      ],
      estado: "Activa"
    },
    {
      nombre: "Them Crooked Vultures",
      rol: "Baterista",
      pais: "Estados Unidos",
      añoFormacion: 2009,
      genero: "Hard Rock / Stoner Rock",
      albumesNotables: [
        {
          titulo: "Them Crooked Vultures",
          año: 2009,
          cancionesDestacadas: ["New Fang", "Dead End Friends", "No One Loves Me & Neither Do I"]
        }
      ],
      estado: "Inactiva"
    },
    {
      nombre: "Queens of the Stone Age",
      rol: "Baterista (colaborador en ciertos álbumes y giras)",
      pais: "Estados Unidos",
      añoFormacion: 1996,
      genero: "Stoner Rock / Alternative Rock",
      albumesNotables: [
        {
          titulo: "Songs for the Deaf",
          año: 2002,
          cancionesDestacadas: ["No One Knows", "Go With the Flow", "God is in the Radio"]
        },
        {
          titulo: "...Like Clockwork",
          año: 2013,
          cancionesDestacadas: ["I Sat by the Ocean", "My God Is the Sun", "If I Had a Tail"]
        }
      ],
      estado: "Activa"
    }
  ]
};

// enviar a la consooola:
console.log(bandasDaveGrohl.bandas[3].nombre); // salida: "Queens of the Stone Age"
console.log(bandasDaveGrohl.bandas[3].albumesNotables[0].cancionesDestacadas); // salida: ["No One Knows", "Go With the Flow", "Song for the Dead"]