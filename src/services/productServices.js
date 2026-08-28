const productos = [{
    id: 1,
    nombre: "Humo y Chimenea",
    tamano: "pequeño",
    precio: 150,
    stock: 15,
    categoria: "Paz y Hogar", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXD7cYATcKG246jcHZeGgqtb8aLjVAgdJVGRvYnadiOUz2t3yCeEAaro&s=10",
    descripcion: "Humo de chimenea es una de las fragancias más sofisticadas y evocadoras de toda la colección. Pertenece a un nicho muy cotizado en el mundo de las velas de lujo: las llamadas fragancias de confort oscuro, que despiertan sensaciones de refugio, masculinidad y nostalgia invernal",

},
{
    id: 2,
    nombre: "Humo y Chimenea",
    tamano: "mediano",
    precio: 225,
    stock: 10,
    categoria: "Paz y Hogar", 
    imagen: "https://flordevenus.com.mx/cdn/shop/files/2_87369456-3055-4f97-b09c-67aafe0f1a68_720x.png?v=1783531364",
    descripcion: "Humo de chimenea es una de las fragancias más sofisticadas y evocadoras de toda la colección. Pertenece a un nicho muy cotizado en el mundo de las velas de lujo: las llamadas fragancias de confort oscuro, que despiertan sensaciones de refugio, masculinidad y nostalgia invernal",

},
{
    id: 3,
    nombre: "Humo y Chimenea",
    tamano: "grande",
    precio: 350,
    stock: 26,
    categoria: "Paz y Hogar", 
    imagen: "https://media.timeout.com/images/105657235/image.jpg",
    descripcion: "Humo de chimenea es una de las fragancias más sofisticadas y evocadoras de toda la colección. Pertenece a un nicho muy cotizado en el mundo de las velas de lujo: las llamadas fragancias de confort oscuro, que despiertan sensaciones de refugio, masculinidad y nostalgia invernal",

},
{
    id: 4,
    nombre: "Bosque de pinos",
    tamano: "pequeño",
    precio: 150,
    stock: 8,
    categoria: "Paz y Hogar",
    imagen: "https://resources.sears.com.mx/medios-plazavip/mkt/6564c47180d12_img_20231127_102409_-1000_x_1000_p-xel-jpg.jpg",
    descripcion: "El bosque despeja y restaura. Es una fragancia que pertenece al universo del bienestar y la reconexión con la naturaleza, un nicho que ha crecido enormemente en los últimos años"
},
{
    id: 5,
    nombre: "Bosque de pinos",
    tamano: "mediano",
    precio: 225,
    stock: 4,
    categoria: "Paz y Hogar",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwksSxwKUHPqSQJc84t7fx5cX4YbtdvLA5rmuH9seiw&s",
    descripcion: "El bosque despeja y restaura. Es una fragancia que pertenece al universo del bienestar y la reconexión con la naturaleza, un nicho que ha crecido enormemente en los últimos años"
},
{
    id: 6,
    nombre: "Bosque de pinos",
    tamano: "grande",
    precio: 350,
    stock: 16,
    categoria: "Paz y Hogar",
    imagen: "https://cdn.shopify.com/s/files/1/0020/7949/0101/files/FDV_SEPT_2021-80_480x480.jpg?v=1666623789",
    descripcion: "El bosque despeja y restaura. Es una fragancia que pertenece al universo del bienestar y la reconexión con la naturaleza, un nicho que ha crecido enormemente en los últimos años"
},
{
    id: 7,
    nombre: "Sandalo Sagrado",
    tamano: "pequeño",
    precio: 150,
    stock: 22,
    categoria: "Paz y Hogar",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL7J9xewDcoyRcm6m8JgKXIwgE5_akQfTQZdmlxWQ6w&s",
    descripcion: "sándalo sagrado transforma. Es una fragancia que cambia el ambiente de una habitación de manera casi inmediata, creando una atmósfera densa, cálida y ceremonial. Su ingrediente estrella, el sándalo de Mysore, es uno de los materiales más venerados en perfumería desde hace más de 4,000 años"
},
{
    id: 8,
    nombre: "Sandalo Sagrado",
    tamano: "mediano",
    precio: 225,
    stock: 10,
    categoria: "Paz y Hogar",
    imagen: "https://flordevenus.com.mx/cdn/shop/files/3_5e690ecc-2343-483b-985c-8aca79d3597a_1080x.png?v=1783531131",
    descripcion: "sándalo sagrado transforma. Es una fragancia que cambia el ambiente de una habitación de manera casi inmediata, creando una atmósfera densa, cálida y ceremonial. Su ingrediente estrella, el sándalo de Mysore, es uno de los materiales más venerados en perfumería desde hace más de 4,000 años"
},
{
    id: 9,
    nombre: "Sandalo Sagrado",
    tamano: "grande",
    precio: 350,
    stock: 21,
    categoria: "Paz y Hogar",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0TU0fsWZjLstQlXpCJyCuYVmwwvpBgAf87m81FnW8g&s",
    descripcion: "sándalo sagrado transforma. Es una fragancia que cambia el ambiente de una habitación de manera casi inmediata, creando una atmósfera densa, cálida y ceremonial. Su ingrediente estrella, el sándalo de Mysore, es uno de los materiales más venerados en perfumería desde hace más de 4,000 años"
},
{
    id: 10,
    nombre: "Bambu y Te Verde",
    tamano: "pequeño",
    precio: 150,
    stock: 0,
    categoria: "Paz y Hogar",
    imagen: "https://resources.sears.com.mx/medios-plazavip/mkt/6564c47180d12_img_20231127_102409_-1000_x_1000_p-xel-jpg.jpg",
    descripcion: "Bambu y te verde ocupa un lugar muy especial en la colección porque es la fragancia más moderna y orientada al diseño de interiores, esta fragancia es deliberadamente estética. Huele a un apartamento bien decorado, a una sala de reuniones de lujo, a un hotel en el centro de Tokio"
},
{
    id: 11,
    nombre: "Bambu y Te Verde",
    tamano: "mediano",
    precio: 225,
    stock: 4,
    categoria: "Paz y Hogar",
    imagen: "https://flordevenus.com.mx/cdn/shop/files/1_8b3a299d-3363-43df-934a-c251c283cc7c.png?v=1783531276&width=1080",
    descripcion: "Bambu y te verde ocupa un lugar muy especial en la colección porque es la fragancia más moderna y orientada al diseño de interiores, esta fragancia es deliberadamente estética. Huele a un apartamento bien decorado, a una sala de reuniones de lujo, a un hotel en el centro de Tokio"
},
{
    id: 12,
    nombre: "Bambu y Te Verde",
    tamano: "grande",
    precio: 350,
    stock: 6,
    categoria: "Paz y Hogar",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb78IpCdiK2edxPG074pQFwARqsqkaO7yubslRgAbmH25XuUJm8kFAXc&s=10",
    descripcion: "Bambu y te verde ocupa un lugar muy especial en la colección porque es la fragancia más moderna y orientada al diseño de interiores, esta fragancia es deliberadamente estética. Huele a un apartamento bien decorado, a una sala de reuniones de lujo, a un hotel en el centro de Tokio"
},
{
    id: 13,
    nombre: "Rosa de Medianoche",
    tamano: "pequeño",
    precio: 100,
    stock: 8,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqy7W2jjPK0y-rgdcm0TPkafBZLvIJMeohO7_pdZxAcQ&s",
    descripcion: "El truco está en su premisa: toma el ingrediente más clásico y esperado de la perfumería —la rosa— y lo subvierte completamente con una base oscura y ahumada que lo hace completamente inesperado"
},
{
    id: 14,
    nombre: "Rosa de Medianoche",
    tamano: "mediano",
    precio: 175,
    stock: 18,
    categoria: "Flores y Jardin",
    imagen: "https://alurahome.mx/cdn/shop/files/eterea_jazmin_grande.png?v=1755218971",
    descripcion: "El truco está en su premisa: toma el ingrediente más clásico y esperado de la perfumería —la rosa— y lo subvierte completamente con una base oscura y ahumada que lo hace completamente inesperado"
},
{
    id: 15,
    nombre: "Rosa de Medianoche",
    tamano: "grande",
    precio: 250,
    stock: 10,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg4GmYBctO1hcHUcAjep2vzztFLVeIRrEcSQjdnE7pA&s=10",
    descripcion: "El truco está en su premisa: toma el ingrediente más clásico y esperado de la perfumería —la rosa— y lo subvierte completamente con una base oscura y ahumada que lo hace completamente inesperado"
},
{
    id: 16,
    nombre: "Flor de Cerezo",
    tamano: "pequeño",
    precio: 100,
    stock: 0,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyNhN0nQILmuX8_PDmZdUHFPJt6DjpEgYYJay-S20HQ&s",
    descripcion: "Su secreto está en la nota de polvo de seda y heliotropo en la base. Esa textura empolvada, casi táctil, es lo que convierte una simple floral en algo verdaderamente memorable y adictivo"
},
{
    id: 17,
    nombre: "Flor de Cerezo",
    tamano: "mediano",
    precio: 175,
    stock: 0,
    categoria: "Flores y Jardin",
    imagen: "https://alurahome.mx/cdn/shop/files/ed511c33-a27c-43e7-97d0-2f6dcf0598f4.png?v=1751420063&width=533",
    descripcion: "Su secreto está en la nota de polvo de seda y heliotropo en la base. Esa textura empolvada, casi táctil, es lo que convierte una simple floral en algo verdaderamente memorable y adictivo"
},
{
    id: 18,
    nombre: "Flor de Cerezo",
    tamano: "grande",
    precio: 250,
    stock: 3,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlsxyT18oFjxBfHVkntfHFroDrj6kjyWr3ue1sAhA9w&s=10",
    descripcion: "Su secreto está en la nota de polvo de seda y heliotropo en la base. Esa textura empolvada, casi táctil, es lo que convierte una simple floral en algo verdaderamente memorable y adictivo"
},
{
    id: 19,
    nombre: "Orquidia Negra",
    tamano: "pequeño",
    precio: 100,
    stock: 7,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkifYGxwwxidq2joCrpzELiOZRAu2aAjfNFd21XNp8w&s",
    descripcion: "La orquídea negra no existe en la naturaleza — es una construcción olfativa pura, una fantasía. Combina la densidad floral de la orquídea con la cremosidad animal de la vainilla de Tahití y el peso oscuro del ámbar. El resultado es algo que no huele a flor ni a dulce: huele a lujo sin disculpas"
},
{
    id: 20,
    nombre: "Orquidia Negra",
    tamano: "mediano",
    precio: 175,
    stock: 11,
    categoria: "Flores y Jardin",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_678074-MLM104475028481_012026-O.webp",
    descripcion: "La orquídea negra no existe en la naturaleza — es una construcción olfativa pura, una fantasía. Combina la densidad floral de la orquídea con la cremosidad animal de la vainilla de Tahití y el peso oscuro del ámbar. El resultado es algo que no huele a flor ni a dulce: huele a lujo sin disculpas"
},
{
    id: 21,
    nombre: "Orquidia Negra",
    tamano: "grande",
    precio: 250,
    stock: 0,
    categoria: "Flores y Jardin",
    imagen: "https://candlecraft.mx/cdn/shop/files/300ml-paris-vaso-de-lujo-de-vidrio-para-velas-frasco-dorado-metalico-1333325_360x.webp?v=1781646448",
    descripcion: "La orquídea negra no existe en la naturaleza — es una construcción olfativa pura, una fantasía. Combina la densidad floral de la orquídea con la cremosidad animal de la vainilla de Tahití y el peso oscuro del ámbar. El resultado es algo que no huele a flor ni a dulce: huele a lujo sin disculpas"
},
{
    id: 22,
    nombre: "Jazmin y Limon",
    tamano: "pequeño",
    precio: 100,
    stock: 12,
    categoria: "Flores y Jardin",
    imagen: "https://catalara.com/cdn/shop/files/BAD05346.jpg?v=1775938561&width=3944",
    descripcion: "El musgo de roble en la base le da profundidad terrenal a una fragancia que de otro modo sería solo luminosa. Ese contraste — cielo brillante arriba, tierra húmeda abajo — es lo que la convierte en algo más complejo que un simple ambientador de flores. Es un jardín real, no una postal"
},
{
    id: 23,
    nombre: "Jazmin y Limon",
    tamano: "mediano",
    precio: 175,
    stock: 12,
    categoria: "Flores y Jardin",
    imagen: "https://alurahome.mx/cdn/shop/files/vela_verde_bergamota_relajacion.png?v=1773804795",
    descripcion: "El musgo de roble en la base le da profundidad terrenal a una fragancia que de otro modo sería solo luminosa. Ese contraste — cielo brillante arriba, tierra húmeda abajo — es lo que la convierte en algo más complejo que un simple ambientador de flores. Es un jardín real, no una postal"
},
{
    id: 24,
    nombre: "Jazmin y Limon",
    tamano: "grande",
    precio: 250,
    stock: 0,
    categoria: "Flores y Jardin",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XfQBV5R_VxU-FiNkpo4QDUQ5YywEf0j5URq913OUBJYUy7VDO3gG9UA&s=10",
    descripcion: "El musgo de roble en la base le da profundidad terrenal a una fragancia que de otro modo sería solo luminosa. Ese contraste — cielo brillante arriba, tierra húmeda abajo — es lo que la convierte en algo más complejo que un simple ambientador de flores. Es un jardín real, no una postal"
},
{
    id: 25,
    nombre: "Canela y Naranja",
    tamano: "pequeño",
    precio: 200,
    stock: 6,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLiaJfb_f3HfsnBHeTXCmQj9uKoIKw02QqW4ZZK45cA&s",
    descripcion: "Aromas tipicos de la gastronomia mexicana, que nos recuerdan nuestras tradiciones, la calidez de la canela con lo fresco de unos toques citricos hace de cualquier espacio un lugar mas ameno y tranquilo"
},
{
    id: 26,
    nombre: "Canela y Naranja",
    tamano: "mediano",
    precio: 300,
    stock: 2,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://www.simone.com.mx/cdn/shop/products/72320.jpg?v=1616029170&width=533",
    descripcion: "Aromas tipicos de la gastronomia mexicana, que nos recuerdan nuestras tradiciones, la calidez de la canela con lo fresco de unos toques citricos hace de cualquier espacio un lugar mas ameno y tranquilo"
},
{
    id: 27,
    nombre: "Canela y Naranja",
    tamano: "grande",
    precio: 400,
    stock: 9,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://m.media-amazon.com/images/I/71S6kMz9BbL.jpg",
    descripcion: "Aromas tipicos de la gastronomia mexicana, que nos recuerdan nuestras tradiciones, la calidez de la canela con lo fresco de unos toques citricos hace de cualquier espacio un lugar mas ameno y tranquilo"
},
{
    id: 28,
    nombre: "Vainilla",
    tamano: "pequeño",
    precio: 200,
    stock: 0,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jqnzin-uQfgXBGRNhf52ySJhTKJz-Hcm1enrvtHIyw&s",
    descripcion: "Quiza nuestra vela mas sencilla en cuanto aroma, pero no por eso menos disfrutable, la sensacion de tranquilidad que genera este aroma dulce siempre sera como un abrazo para el corazon, ideal para climas frios"
},
{
    id: 29,
    nombre: "Vainilla",
    tamano: "mediano",
    precio: 300,
    stock: 0,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://www.simone.com.mx/cdn/shop/products/7234_586fa8df-89c9-4de7-ac22-7c47c9c2772e.jpg?v=1614100874&width=533",
    descripcion: "Quiza nuestra vela mas sencilla en cuanto aroma, pero no por eso menos disfrutable, la sensacion de tranquilidad que genera este aroma dulce siempre sera como un abrazo para el corazon, ideal para climas frios"
},
{
    id: 30,
    nombre: "Vainilla",
    tamano: "grande",
    precio: 400,
    stock: 3,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://img.ltwebstatic.com/images3_spmp/2023/07/01/1688196226d137ff7d28d77a2ab9ab4e308edb846c_thumbnail_405x552_thumbnail_720x.jpg",
    descripcion: "Quiza nuestra vela mas sencilla en cuanto aroma, pero no por eso menos disfrutable, la sensacion de tranquilidad que genera este aroma dulce siempre sera como un abrazo para el corazon, ideal para climas frios"
},
{
    id: 31,
    nombre: "Chocolate Mexicano",
    tamano: "pequeño",
    precio: 200,
    stock: 11,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://catalara.com/cdn/shop/files/BAD05150.jpg?v=1775947646&width=3738",
    descripcion: "Desde culturas prehispánicas ya se utilizaba el chocolate como bebida tradicional para eventos especiales, el chocolate es parte de nuestra cultura, por ello, creamos esta vela con notas de chocolate y canela, sobre una base de maderas ahumadas para hacer contraste en un ambiente reconfortante"
},
{
    id: 32,
    nombre: "Chocolate Mexicano",
    tamano: "mediano",
    precio: 300,
    stock: 9,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdi_EVqgNSIt7xcnkMhGMqjFPqvPJJq5Y5YQqnaLRBjQ&s=10",
    descripcion: "Desde culturas prehispánicas ya se utilizaba el chocolate como bebida tradicional para eventos especiales, el chocolate es parte de nuestra cultura, por ello, creamos esta vela con notas de chocolate y canela, sobre una base de maderas ahumadas para hacer contraste en un ambiente reconfortante"
},
{
    id: 33,
    nombre: "Chocolate Mexicano",
    tamano: "grande",
    precio: 400,
    stock: 1,
    categoria: "Nuestro Sabor, Nuestra Tierra",
    imagen: "https://m.media-amazon.com/images/I/71668J-A-7L._AC_UF350,350_QL80_.jpg",
    descripcion: "Desde culturas prehispánicas ya se utilizaba el chocolate como bebida tradicional para eventos especiales, el chocolate es parte de nuestra cultura, por ello, creamos esta vela con notas de chocolate y canela, sobre una base de maderas ahumadas para hacer contraste en un ambiente reconfortante"
}
];


const conReintentos = async (fn, intentos = 3) => {
    for (let i = 1; i <= intentos; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === intentos) throw error;
            await new Promise((r) => setTimeout(r, 1000 * i));
        }
    }
};

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const huboError = Math.random() < 0.1;
            if (huboError) {
                reject(new Error("Error de conexion"));
            } else {
                resolve(productos);
            }
        }, 500);
    });
};

export const obtenerProductos = () => conReintentos(pedirProductos, 3);

export const obtenerProductosporId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const productFound = productos.find((producto) => producto.id === Number(id));
          if (productFound){
            resolve(productFound);
          } else {
            reject(new Error("No exisite un producto con el id: ", id));
          }
        }, 1000);
    });
};