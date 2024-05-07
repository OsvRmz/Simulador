const TablaPeriodica2 = {
    elementos: [
        { nombre: "Proton", N: 1.0078, Z: 1, simbolo: "H" },
        { nombre: "Deuteron", N: 2.014, Z: 1, simbolo: "H"},
        { nombre: "Tritio", N: 3.016, Z: 1, simbolo: "H" },
        { nombre: "ParticulaAlfa", N: 4.0026, Z: 2, simbolo: "He" },
        { nombre: "Neutron", N: 1.008665, Z: 0, simbolo: "n"}
    ],

    obtenerSimbolo(nombre) {
        const elemento = this.encontrarElementoPorNombre(nombre);
        return elemento ? elemento.simbolo : null;
  },

    encontrarElementoPorNombre(nombre) {
      return this.elementos.find(elemento => elemento.nombre === nombre) || null;
  },

  encontrarElementoPorNZ(N, Z) {
      return this.elementos.find(elemento => Math.round(elemento.N) === N && Math.round(elemento.Z) === Z) || null;
  },

  obtenerN(nombre) {
      const elemento = this.encontrarElementoPorNombre(nombre);
      return elemento ? elemento.N : null;
  },

  obtenerZ(nombre) {
      const elemento = this.encontrarElementoPorNombre(nombre);
      return elemento ? elemento.Z : null;
  },

  obtenerNombre(N, Z) {
      const elemento = this.encontrarElementoPorNZ(N, Z);
      return elemento ? elemento.nombre : null;
  }
  };