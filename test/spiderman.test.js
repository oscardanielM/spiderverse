const Spiderman = require("./../app/spiderman")

describe("Prueba clase spiderman", () => {
    test('Prueba 1 clase spiderman', () => {
        //En esta apartado se escribe el codigo a probar
        //Instanciamos la clase spiderman
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos el codigo que este funcionando de la manera esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });

    test('Prueba 2 clase spiderman', () => {
        //En esta apartado se escribe el codigo a probar
        //Instanciamos la clase spiderman
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

        //Validamos el codigo que este funcionando de la manera esperada
        expect(tomHolland.getInfo).toBe("Hola, Soy Tom Holland y vengo de Marvel studios");
    });
  })