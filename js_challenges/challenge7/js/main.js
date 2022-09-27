/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/07
 * @description Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades
 * tiene el almacén hecho un desastre y no encuentra nada.
 * Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
 * La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.
 * Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos,
 * cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.
 */
{
  let contains = (store, product) => {
    let json = JSON.stringify(store);
    var regexp = new RegExp(product, "gi");
    console.log(regexp.test(json));
  };

  document.addEventListener("DOMContentLoaded", function () {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta", // <- ¡Está aquí!
        },
      },
    };

    contains(almacen, "camiseta"); // true

    const otroAlmacen = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    };

    contains(otroAlmacen, "gameboy"); // false
  });
}
