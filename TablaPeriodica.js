const TablaPeriodica = {
    elementos: [
        { nombre: "H", N: 1.0079, Z: 1 },
        { nombre: "He", N: 4.0026, Z: 2 },
        { nombre: "Li", N: 6.941, Z: 3 },
        { nombre: "Be", N: 9.0122, Z: 4 },
        { nombre: "B", N: 10.811, Z: 5 },
        { nombre: "C", N: 12.0107, Z: 6 },
        { nombre: "N", N: 14.0067, Z: 7 },
        { nombre: "O", N: 15.9994, Z: 8 },
        { nombre: "F", N: 18.9984, Z: 9 },
        { nombre: "Ne", N: 20.1797, Z: 10 },
        { nombre: "Na", N: 22.9897, Z: 11 },
        { nombre: "Mg", N: 24.305, Z: 12 },
        { nombre: "Al", N: 26.9815, Z: 13 },
        { nombre: "Si", N: 28.0855, Z: 14 },
        { nombre: "P", N: 30.9738, Z: 15 },
        { nombre: "S", N: 32.065, Z: 16 },
        { nombre: "Cl", N: 35.453, Z: 17 },
        { nombre: "K", N: 39.0983, Z: 19 },
        { nombre: "Ar", N: 39.948, Z: 18 },
        { nombre: "Ca", N: 40.078, Z: 20 },
        { nombre: "Sc", N: 44.9559, Z: 21 },
        { nombre: "Ti", N: 47.867, Z: 22 },
        { nombre: "V", N: 50.9415, Z: 23 },
        { nombre: "Cr", N: 51.9961, Z: 24 },
        { nombre: "Mn", N: 54.938, Z: 25 },
        { nombre: "Fe", N: 55.845, Z: 26 },
        { nombre: "Ni", N: 58.6934, Z: 28 },
        { nombre: "Co", N: 58.9332, Z: 27 },
        { nombre: "Cu", N: 63.546, Z: 29 },
        { nombre: "Zn", N: 65.39, Z: 30 },
        { nombre: "Ga", N: 69.723, Z: 31 },
        { nombre: "Ge", N: 72.64, Z: 32 },
        { nombre: "As", N: 74.9216, Z: 33 },
        { nombre: "Se", N: 78.96, Z: 34 },
        { nombre: "Br", N: 79.904, Z: 35 },
        { nombre: "Br", N: 79.904, Z: 35 },
        { nombre: "Kr", N: 83.8, Z: 36 },
        { nombre: "Rb", N: 85.4678, Z: 37 },
        { nombre: "Sr", N: 87.62, Z: 38 },
        { nombre: "Y", N: 88.9059, Z: 39 },
        { nombre: "Zr", N: 91.224, Z: 40 },
        { nombre: "Nb", N: 92.9064, Z: 41 },
        { nombre: "Mo", N: 95.94, Z: 42 },
        { nombre: "Tc", N: 98, Z: 43 },
        { nombre: "Ru", N: 101.07, Z: 44 },
        { nombre: "Rh", N: 102.9055, Z: 45 },
        { nombre: "Pd", N: 106.42, Z: 46 },
        { nombre: "Ag", N: 107.8682, Z: 47 },
        { nombre: "Cd", N: 112.411, Z: 48 },
        { nombre: "In", N: 114.818, Z: 49 },
        { nombre: "Sn", N: 118.71, Z: 50 },
        { nombre: "Sb", N: 121.76, Z: 51 },
        { nombre: "I", N: 126.9045, Z: 53 },
        { nombre: "Te", N: 127.6, Z: 52 },
        { nombre: "Xe", N: 131.293, Z: 54 },
        { nombre: "Cs", N: 132.9055, Z: 55 },
        { nombre: "Ba", N: 137.327, Z: 56 },
        { nombre: "La", N: 138.9055, Z: 57 },
        { nombre: "Ce", N: 140.116, Z: 58 },
        { nombre: "Pr", N: 140.9077, Z: 59 },
        { nombre: "Nd", N: 144.24, Z: 60 },
        { nombre: "Pm", N: 145, Z: 61 },
        { nombre: "Sm", N: 150.36, Z: 62 },
        { nombre: "Eu", N: 151.964, Z: 63 },
        { nombre: "Gd", N: 157.25, Z: 64 },
        { nombre: "Tb", N: 158.9253, Z: 65 },
        { nombre: "Dy", N: 162.5, Z: 66 },
        { nombre: "Ho", N: 164.9303, Z: 67 },
        { nombre: "Er", N: 167.259, Z: 68 },
        { nombre: "Tm", N: 168.9342, Z: 69 },
        { nombre: "Yb", N: 173.04, Z: 70 },
        { nombre: "Lu", N: 174.967, Z: 71 },
        { nombre: "Hf", N: 178.49, Z: 72 },
        { nombre: "Ta", N: 180.9479, Z: 73 },
        { nombre: "W", N: 183.84, Z: 74 },
        { nombre: "Re", N: 186.207, Z: 75 },
        { nombre: "Os", N: 190.23, Z: 76 },
        { nombre: "Ir", N: 192.217, Z: 77 },
        { nombre: "Pt", N: 195.078, Z: 78 },
        { nombre: "Au", N: 196.9665, Z: 79 },
        { nombre: "Hg", N: 200.59, Z: 80 },
        { nombre: "Tl", N: 204.3833, Z: 81 },
        { nombre: "Pb", N: 207.2, Z: 82 },
        { nombre: "Bi", N: 208.9804, Z: 83 },
        { nombre: "Po", N: 209, Z: 84 },
        { nombre: "At", N: 210, Z: 85 },
        { nombre: "Rn", N: 222, Z: 86 },
        { nombre: "Fr", N: 223, Z: 87 },
        { nombre: "Ra", N: 226, Z: 88 },
        { nombre: "Ac", N: 227, Z: 89 },
        { nombre: "Pa", N: 231.0359, Z: 91 },
        { nombre: "Th", N: 232.0381, Z: 90 },
        { nombre: "Np", N: 237, Z: 93 },
        { nombre: "U", N: 238.0289, Z: 92 },
        { nombre: "Am", N: 243, Z: 95 },
        { nombre: "Pu", N: 244, Z: 94 },
        { nombre: "Cm", N: 247, Z: 96 },
        { nombre: "Bk", N: 247, Z: 97 },
        { nombre: "Cf", N: 251, Z: 98 },
        { nombre: "Es", N: 252, Z: 99 },
        { nombre: "Fm", N: 257, Z: 100 },
        { nombre: "Md", N: 258, Z: 101 },
        { nombre: "No", N: 259, Z: 102 },
        { nombre: "Rf", N: 261, Z: 104 },
        { nombre: "Lr", N: 262, Z: 103 },
        { nombre: "Db", N: 262, Z: 105 },
        { nombre: "Bh", N: 264, Z: 107 },
        { nombre: "Sg", N: 266, Z: 106 },
        { nombre: "Mt", N: 268, Z: 109 },
        { nombre: "Hs", N: 277, Z: 108 }
    ],

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