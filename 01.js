//objeto
const suicidas = {
    tinta : 'Vincent van Gogh',
    musica : 'Chester Bennington',
    cine : 'Tony Scott',
    letras : 'Virginia Woolf'
}
//agregando una nueva propiedad al objeto
suicidio.deporte = 'Dave Mirra';

//objeto con un array anidado
const enfermedadesMentales = {
  depresion: {
    nombre: "Depresión",
    descripcion: "Trastorno del estado de ánimo que causa tristeza persistente y pérdida de interés.",
    sintomas: [
      "Tristeza prolongada",
      "Falta de energía",
      "Dificultad para concentrarse",
      "Cambios en el apetito o peso",
      "Insomnio o hipersomnia"
    ],
    tratamientos: [
      "Terapia cognitivo-conductual",
      "Medicación antidepresiva",
      "Apoyo psicológico",
      "Cambios en el estilo de vida"
    ],
    prevalencia: "Afecta a aproximadamente el 5% de la población adulta mundial"
  },
  ansiedad: {
    nombre: "Trastorno de Ansiedad Generalizada",
    descripcion: "Preocupación excesiva y persistente que es difícil de controlar.",
    sintomas: [
      "Nerviosismo constante",
      "Tensión muscular",
      "Sudoración",
      "Palpitaciones",
      "Dificultad para dormir"
    ],
    tratamientos: [
      "Terapia cognitivo-conductual",
      "Medicación ansiolítica",
      "Técnicas de relajación",
      "Mindfulness"
    ],
    prevalencia: "Afecta a cerca del 4% de la población global"
  },
  esquizofrenia: {
    nombre: "Esquizofrenia",
    descripcion: "Trastorno mental grave que afecta el pensamiento, las emociones y el comportamiento.",
    sintomas: [
      "Alucinaciones",
      "Delirios",
      "Pensamiento desorganizado",
      "Aislamiento social",
      "Falta de motivación"
    ],
    tratamientos: [
      "Medicación antipsicótica",
      "Terapia psicosocial",
      "Rehabilitación cognitiva",
      "Apoyo familiar"
    ],
    prevalencia: "Afecta aproximadamente al 1% de la población mundial"
  }
};


console.log(enfermedadesMentales.depresion.nombre); // La salida es: "Depresión"
console.log(enfermedadesMentales.ansiedad.sintomas); // La salida es: lista de síntomas de ansiedad