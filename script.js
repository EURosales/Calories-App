//Modificable dom objects
const calories = document.getElementById("calories");
const btn = document.getElementById("modeSelector");
const navbar = document.getElementById("navbar");
const title = document.getElementById("title");
const body = document.getElementById("body");
const container_left = document.getElementById("container-left");
const container_group = document.getElementById("container-group");
const counter_view = document.getElementById("counter-view");
const food_container = document.getElementById("food-container");
const food_type_title = document.getElementById("br-title");

let indContainer = Array.from(document.getElementsByClassName("mish"));

//console.log(Shit);
//indicators
let Kcal = 0;
let activeDarkMode = false;

btn.addEventListener("click", function (e) {
    //modeChecker();
    indContainer.forEach(modeChecker);
});

/*------------------FUNCIONES--------------*/

function modeChecker(element) {
    //otherCheck();
    if (
        activeDarkMode ==
        true /*&&
        indContainer.classList.contains("selected-dark")*/
    ) {
        activeDarkMode = false;
        body.classList.remove("body-dark");
        //indContainer.classList.remove("selected-dark");
        container_left.classList.remove("container-left-dark");
        container_left.classList.add("container-left");
        container_group.classList.remove("container-group-dark");
        container_group.classList.add("container-group");
        counter_view.classList.remove("counter-view-dark");
        counter_view.classList.add("counter-view");
        food_container.classList.remove("food-container-dark");
        food_container.classList.add("food-container");
        food_type_title.classList.remove("food-type-title-dark");
        food_type_title.classList.add("food-type-title");
        //barra de navegación - titulo
        navbar.classList.add("navbar");
        navbar.classList.remove("navbar-dark");

        //Titulo de la barra
        title.classList.add("titulo");
        title.classList.remove("titulo-dark");
        //Botón de modo oscuro
        btn.classList.add("btn-dark");
        btn.classList.remove("btn-light");

        //Cereal seleccionado
        element.classList.add("selected-light");
        element.classList.remove("selected-dark");
        //Cereal seleccionado
        element.classList.add("selected-light");
        element.classList.remove("selected-dark");
        //Cereal seleccionado
        toast.classList.add("selected-light");
        toast.classList.remove("selected-dark");
        //Cereal seleccionado
        juice_br.classList.add("selected-light");
        juice_br.classList.remove("selected-dark");
        //Cereal seleccionado
        milk_br.classList.add("selected-light");
        milk_br.classList.remove("selected-dark");
        //Cereal seleccionado
        water_br.classList.add("selected-light");
        water_br.classList.remove("selected-dark");
        //Cereal seleccionado
        hottea_br.classList.add("selected-light");
        hottea_br.classList.remove("selected-dark");
        //Cereal seleccionado
        coffee_br.classList.add("selected-light");
        coffee_br.classList.remove("selected-dark");
        //Cereal seleccionado
        coldtea_br.classList.add("selected-light");
        coldtea_br.classList.remove("selected-dark");
    } else {
        activeDarkMode = true;
        body.classList.add("body-dark");
        container_left.classList.add("container-left-dark");
        container_left.classList.remove("container-left");
        container_group.classList.add("container-group-dark");
        container_group.classList.remove("container-group");
        counter_view.classList.add("counter-view-dark");
        counter_view.classList.remove("counter-view");
        food_container.classList.add("food-container-dark");
        food_container.classList.remove("food-container");
        food_type_title.classList.add("food-type-title-dark");
        food_type_title.classList.remove("food-type-title");
        //
        navbar.classList.remove("navbar");
        navbar.classList.add("navbar-dark");

        //
        title.classList.add("titulo-dark");
        title.classList.remove("titulo");
        //
        btn.classList.add("btn-light");
        btn.classList.remove("btn-dark");

        //Cereal seleccionado
        cereal.classList.add("selected-dark");
        cereal.classList.remove("selected-light");
        //Cereal seleccionado
        eggs.classList.add("selected-dark");
        eggs.classList.remove("selected-light");
        //Cereal seleccionado
        toast.classList.add("selected-dark");
        toast.classList.remove("selected-light");
        //Cereal seleccionado
        juice_br.classList.add("selected-dark");
        juice_br.classList.remove("selected-light");
        //Cereal seleccionado
        milk_br.classList.add("selected-dark");
        milk_br.classList.remove("selected-light");
        //Cereal seleccionado
        water_br.classList.add("selected-dark");
        water_br.classList.remove("selected-light");
        //Cereal seleccionado
        hottea_br.classList.add("selected-dark");
        hottea_br.classList.remove("selected-light");
        //Cereal seleccionado
        coffee_br.classList.add("selected-dark");
        coffee_br.classList.remove("selected-light");
        //Cereal seleccionado
        coldtea_br.classList.add("selected-dark");
        coldtea_br.classList.remove("selected-light");

        /*if (ind_food_container.classList.contains("selected-light")) {
      ind_food_container.classList.remove("selected-light");
      ind_food_container.classList.add("selected-dark");
    } else if (ind_food_container.classList.contains("selected-dark")) {
      ind_food_container.classList.add("selected-light");
      ind_food_container.classList.remove("selected-dark");
    }*/
    }
}

function selectChecker(object) {
    if (
        object.name.classList.contains("unselected") &&
        activeDarkMode == true
    ) {
        object.name.classList.add("selected-dark");
        object.name.classList.remove("unselected");
    } else if (
        object.name.classList.contains("unselected") &&
        activeDarkMode == false
    ) {
        object.name.classList.remove("unselected");
        object.name.classList.add("selected-light");
    } else if (
        object.name.classList.contains("selected-light") &&
        activeDarkMode == true
    ) {
        object.name.classList.remove("selected-light");
        object.name.classList.add("selected-dark");
    } else if (
        object.name.classList.contains("selected-dark") &&
        activeDarkMode == false
    ) {
        object.name.classList.add("unselected");
        object.name.classList.remove("selected-dark");
    } else if (
        object.name.classList.contains("selected-light") &&
        activeDarkMode == false
    ) {
        object.name.classList.add("unselected");
        object.name.classList.remove("selected-light");
    } else if (
        object.name.classList.contains("selected-dark") &&
        activeDarkMode == true
    ) {
        object.name.classList.add("unselected");
        object.name.classList.remove("selected-dark");
    }
}

//función comparadora - CREAR OBJETOS QUE TENGAN EL VALOR DE CALORIAS
function comparer(object) {
    if (object.clicked == false) {
        Kcal += object.kcalValue;
        object.clicked = true;
        console.log(object.clicked);
    } else {
        Kcal -= object.kcalValue;
        object.clicked = false;
        console.log(object.clicked);
    }

    calories.innerText = +Kcal + " Kcal";
}

//brakfast
const cereal = document.getElementById("cereal");
const eggs = document.getElementById("eggs");
const toast = document.getElementById("toast");

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

//actions

//breakfast
cereal.addEventListener("click", function (e) {
    comparer(cereales);
    selectChecker(cereales);
    //test(cereales);
});

eggs.addEventListener("click", function (e) {
    comparer(huevos);
    selectChecker(huevos);
    //test(huevos);
});

toast.addEventListener("click", function (e) {
    comparer(tostadas);
    selectChecker(tostadas);
});

juice_br.addEventListener("click", function (e) {
    comparer(jugo_br);
    selectChecker(jugo_br);
});

coffee_br.addEventListener("click", function (e) {
    comparer(cafe_br);
    selectChecker(cafe_br);
});

milk_br.addEventListener("click", function (e) {
    comparer(leche_br);
    selectChecker(leche_br);
});

coldtea_br.addEventListener("click", function (e) {
    comparer(tefrio_br);
    selectChecker(tefrio_br);
});

hottea_br.addEventListener("click", function (e) {
    comparer(tecaliente_br);
    selectChecker(tecaliente_br);
});

water_br.addEventListener("click", function (e) {
    comparer(agua_br);
    selectChecker(agua_br);
});

/*----------ALMUERZO---------- */

pizza.addEventListener("click", function (e) {
    comparer(Pizza);
    selectChecker(Pizza);
});

hamburger.addEventListener("click", function (e) {
    comparer(hamburguesa);
    selectChecker(hamburguesa);
});

salad.addEventListener("click", function (e) {
    comparer(ensalada);
    selectChecker(ensalada);
});

juice_lu.addEventListener("click", function (e) {
    comparer(jugo_lu);
    selectChecker(jugo_lu);
});

wine_lu.addEventListener("click", function (e) {
    comparer(vino_lu);
    selectChecker(vino_lu);
});

soda_lu.addEventListener("click", function (e) {
    comparer(sodapop_lu);
    selectChecker(sodapop_lu);
});

coldtea_lu.addEventListener("click", function (e) {
    comparer(tefrio_lu);
    selectChecker(tefrio_lu);
});

beer_lu.addEventListener("click", function (e) {
    comparer(cerveza_lu);
    selectChecker(cerveza_lu);
});

water_lu.addEventListener("click", function (e) {
    comparer(agua_lu);
    selectChecker(agua_lu);
});

/*----------CENA---------- */

pasta.addEventListener("click", function (e) {
    comparer(pastas);
    selectChecker(pastas);
});

soup.addEventListener("click", function (e) {
    comparer(sopa);
    selectChecker(sopa);
});

shrimp.addEventListener("click", function (e) {
    comparer(mariscos);
    selectChecker(mariscos);
});

juice_di.addEventListener("click", function (e) {
    comparer(jugo_di);
    selectChecker(jugo_di);
});

wine_di.addEventListener("click", function (e) {
    comparer(vino_di);
    selectChecker(vino_di);
});

soda_di.addEventListener("click", function (e) {
    comparer(sodapop_di);
    selectChecker(sodapop_di);
});

coldtea_di.addEventListener("click", function (e) {
    comparer(tefrio_di);
    selectChecker(tefrio_di);
});

coffee_di.addEventListener("click", function (e) {
    comparer(cafe_di);
    selectChecker(cafe_di);
});

water_di.addEventListener("click", function (e) {
    comparer(agua_di);
    selectChecker(agua_di);
});

beer_di.addEventListener("click", function (e) {
    comparer(cerveza_di);
    selectChecker(cerveza_di);
});

milk_di.addEventListener("click", function (e) {
    comparer(leche_di);
    selectChecker(leche_di);
});

/*----------CENA---------- */

cake.addEventListener("click", function (e) {
    comparer(pastel);
    selectChecker(pastel);
});

pie.addEventListener("click", function (e) {
    comparer(pai);
    selectChecker(pai);
});

macaroni.addEventListener("click", function (e) {
    comparer(macarrones);
    selectChecker(macarrones);
});

juice_de.addEventListener("click", function (e) {
    comparer(jugo_de);
    selectChecker(jugo_de);
});

wine_de.addEventListener("click", function (e) {
    comparer(vino_de);
    selectChecker(vino_de);
});

soda_de.addEventListener("click", function (e) {
    comparer(sodapop_de);
    selectChecker(sodapop_de);
});

coldtea_de.addEventListener("click", function (e) {
    comparer(tefrio_de);
    selectChecker(tefrio_de);
});

coffee_de.addEventListener("click", function (e) {
    comparer(cafe_de);
    selectChecker(cafe_de);
});

water_de.addEventListener("click", function (e) {
    comparer(agua_de);
    selectChecker(agua_de);
});

beer_de.addEventListener("click", function (e) {
    comparer(cerveza_de);
    selectChecker(cerveza_de);
});

milk_de.addEventListener("click", function (e) {
    comparer(leche_de);
    selectChecker(leche_de);
});

hottea_de.addEventListener("click", function (e) {
    comparer(tecaliente_de);
    selectChecker(tecaliente_de);
});
