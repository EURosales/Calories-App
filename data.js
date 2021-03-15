//brakfast
const cerealito = document.getElementById("cereal");
const eggsi = document.getElementById("eggs");
const toasti = document.getElementById("toast");

const juice_br = document.getElementById("juice-br");
const milk_br = document.getElementById("milk-br");
const water_br = document.getElementById("water-br");
const hottea_br = document.getElementById("hottea-br");
const coffee_br = document.getElementById("coffee-br");
const coldtea_br = document.getElementById("coldtea-br");

//lunch
const pizza = document.getElementById("pizza");
const salad = document.getElementById("salad");
const hamburger = document.getElementById("hamb");

const water_lu = document.getElementById("water-lu");
const coldtea_lu = document.getElementById("coldtea-lu");
const juice_lu = document.getElementById("juice-lu");
const beer_lu = document.getElementById("beer-lu");
const soda_lu = document.getElementById("soda-lu");
const wine_lu = document.getElementById("wine-lu");

//dinner
const pasta = document.getElementById("pasta");
const soup = document.getElementById("soup");
const shrimp = document.getElementById("shrimp");

const juice_di = document.getElementById("juice-di");
const coffee_di = document.getElementById("coffee-di");
const soda_di = document.getElementById("soda-di");
const wine_di = document.getElementById("wine-di");
const coldtea_di = document.getElementById("coldtea-di");
const milk_di = document.getElementById("milk-di");
const beer_di = document.getElementById("beer-di");
const water_di = document.getElementById("water-di");

//dessert
const cake = document.getElementById("cake");
const pie = document.getElementById("pie");
const macaroni = document.getElementById("macaroni");

const juice_de = document.getElementById("juice-de");
const coffee_de = document.getElementById("coffee-de");
const soda_de = document.getElementById("soda-de");
const wine_de = document.getElementById("wine-de");
const coldtea_de = document.getElementById("coldtea-de");
const milk_de = document.getElementById("milk-de");
const beer_de = document.getElementById("beer-de");
const water_de = document.getElementById("water-de");
const hottea_de = document.getElementById("hottea-de");

//breakfast

/*const breakfast = [
    {
        cereal: [{ name: cereal, kcalValue: 379, clicked: false }],
        huevos: [{ name: eggs, kcalValue: 109, clicked: false }],
        tostadas: [{ name: toast, kcalValue: 313, clicked: false }],
    },
];*/
/*
const cereales = { name: cereal, kcalValue: 379, clicked: false };
const huevos = { name: eggs, kcalValue: 109, clicked: false };
const tostadas = { name: toast, kcalValue: 313, clicked: false };
console.log(cereal);*/
//lunch
const Pizza = { name: pizza, kcalValue: 620, clicked: false };
const hamburguesa = { name: hamburger, kcalValue: 300, clicked: false };
const ensalada = { name: salad, kcalValue: 427, clicked: false };

//dinner
const pastas = { name: pasta, kcalValue: 131, clicked: false };
const sopa = { name: soup, kcalValue: 90, clicked: false };
const mariscos = { name: shrimp, kcalValue: 396, clicked: false };

//dessert
const pastel = { name: cake, kcalValue: 400, clicked: false };
const pai = { name: pie, kcalValue: 290, clicked: false };
const macarrones = { name: macaroni, kcalValue: 100, clicked: false };

//drinks
const jugo_br = { name: juice_br, kcalValue: 60, clicked: false };
const jugo_lu = { name: juice_lu, kcalValue: 60, clicked: false };
const jugo_di = { name: juice_di, kcalValue: 60, clicked: false };
const jugo_de = { name: juice_de, kcalValue: 60, clicked: false };

const leche_br = { name: milk_br, kcalValue: 150, clicked: false };
const leche_de = { name: milk_de, kcalValue: 150, clicked: false };
const leche_di = { name: milk_di, kcalValue: 150, clicked: false };

const agua_br = { name: water_br, kcalValue: 0, clicked: false };
const agua_di = { name: water_di, kcalValue: 0, clicked: false };
const agua_de = { name: water_de, kcalValue: 0, clicked: false };
const agua_lu = { name: water_lu, kcalValue: 0, clicked: false };

const tecaliente_br = { name: hottea_br, kcalValue: 10, clicked: false };
const tecaliente_de = { name: hottea_de, kcalValue: 10, clicked: false };

const cerveza_lu = { name: beer_lu, kcalValue: 45, clicked: false };
const cerveza_di = { name: beer_di, kcalValue: 45, clicked: false };
const cerveza_de = { name: beer_de, kcalValue: 45, clicked: false };

const sodapop_lu = { name: soda_lu, kcalValue: 140, clicked: false };
const sodapop_di = { name: soda_di, kcalValue: 140, clicked: false };
const sodapop_de = { name: soda_de, kcalValue: 140, clicked: false };

const vino_lu = { name: wine_lu, kcalValue: 85, clicked: false };
const vino_di = { name: wine_di, kcalValue: 85, clicked: false };
const vino_de = { name: wine_de, kcalValue: 85, clicked: false };

const cafe_br = { name: coffee_br, kcalValue: 10, clicked: false };
const cafe_di = { name: coffee_di, kcalValue: 10, clicked: false };
const cafe_de = { name: coffee_de, kcalValue: 10, clicked: false };

const tefrio_br = { name: coldtea_br, kcalValue: 35, clicked: false };
const tefrio_di = { name: coldtea_di, kcalValue: 35, clicked: false };
const tefrio_de = { name: coldtea_de, kcalValue: 35, clicked: false };
const tefrio_lu = { name: coldtea_lu, kcalValue: 35, clicked: false };

//console.log(breakfast.cereal);
