//Modificable dom objects
const calories = document.getElementById('calories');
const btn = document.getElementById('modeSelector');
const navbar = document.getElementById('navbar');
const title = document.getElementById('title');
const body = document.getElementById('body');
const container_left = document.getElementById('container-left');
const container_group = document.getElementById('container-group');
const counter_view = document.getElementById('counter-view');
const food_container = document.getElementById('food-container');
const food_type_title = document.getElementById('br-title');

//indicators
let Kcal = 0;
let activeDarkMode = false;

btn.addEventListener('click', function (e) {
    modeChecker();
});

/*------------------FUNCIONES--------------*/

function modeChecker() {
    //otherCheck();
    if (activeDarkMode == true) {
        activeDarkMode = false;
        body.classList.remove('body-dark');
        container_left.classList.remove('container-left-dark');
        container_left.classList.add('container-left');
        container_group.classList.remove('container-group-dark');
        container_group.classList.add('container-group');
        counter_view.classList.remove('counter-view-dark');
        counter_view.classList.add('counter-view');
        food_container.classList.remove('food-container-dark');
        food_container.classList.add('food-container');
        food_type_title.classList.remove('food-type-title-dark');
        food_type_title.classList.add('food-type-title');

        //barra de navegación - titulo
        navbar.classList.add('navbar');
        navbar.classList.remove('navbar-dark');
        //Titulo de la barra
        title.classList.add('titulo');
        title.classList.remove('titulo-dark');
        //Botón de modo oscuro
        btn.classList.add('btn-dark');
        btn.classList.remove('btn-light');

        //Breakfast
        cereal.classList.toggle('selected-dark');
        eggs.classList.toggle('selected-dark');
        toast.classList.toggle('selected-dark');
        juice_br.classList.toggle('selected-dark');
        milk_br.classList.toggle('selected-dark');
        water_br.classList.toggle('selected-dark');
        hottea_br.classList.toggle('selected-dark');
        coffee_br.classList.toggle('selected-dark');
        coldtea_br.classList.toggle('selected-dark');

        //lunch
        pizza.classList.toggle('selected-dark');
        salad.classList.toggle('selected-dark');
        hamburger.classList.toggle('selected-dark');
        juice_lu.classList.toggle('selected-dark');
        beer_lu.classList.toggle('selected-dark');
        coldtea_lu.classList.toggle('selected-dark');
        soda_lu.classList.toggle('selected-dark');
        wine_lu.classList.toggle('selected-dark');
        water_lu.classList.toggle('selected-dark');

        //dinner
        pasta.classList.toggle('selected-dark');
        soup.classList.toggle('selected-dark');
        shrimp.classList.toggle('selected-dark');
        juice_di.classList.toggle('selected-dark');
        soda_di.classList.toggle('selected-dark');
        coffee_di.classList.toggle('selected-dark');
        wine_di.classList.toggle('selected-dark');
        coldtea_di.classList.toggle('selected-dark');
        milk_di.classList.toggle('selected-dark');
        beer_di.classList.toggle('selected-dark');
        water_di.classList.toggle('selected-dark');

        //dessert
        cake.classList.toggle('selected-dark');
        pie.classList.toggle('selected-dark');
        macaroni.classList.toggle('selected-dark');
        juice_de.classList.toggle('selected-dark');
        soda_de.classList.toggle('selected-dark');
        coffee_de.classList.toggle('selected-dark');
        wine_de.classList.toggle('selected-dark');
        coldtea_de.classList.toggle('selected-dark');
        milk_de.classList.toggle('selected-dark');
        beer_de.classList.toggle('selected-dark');
        water_de.classList.toggle('selected-dark');
        hottea_de.classList.toggle('selected-dark');
    } else {
        activeDarkMode = true;
        body.classList.add('body-dark');
        container_left.classList.add('container-left-dark');
        container_left.classList.remove('container-left');
        container_group.classList.add('container-group-dark');
        container_group.classList.remove('container-group');
        counter_view.classList.add('counter-view-dark');
        counter_view.classList.remove('counter-view');
        food_container.classList.add('food-container-dark');
        food_container.classList.remove('food-container');
        food_type_title.classList.add('food-type-title-dark');
        food_type_title.classList.remove('food-type-title');
        navbar.classList.remove('navbar');
        navbar.classList.add('navbar-dark');
        title.classList.add('titulo-dark');
        title.classList.remove('titulo');
        btn.classList.add('btn-light');
        btn.classList.remove('btn-dark');

        cereal.classList.toggle('selected-dark');
        eggs.classList.toggle('selected-dark');
        toast.classList.toggle('selected-dark');
        juice_br.classList.toggle('selected-dark');
        milk_br.classList.toggle('selected-dark');
        water_br.classList.toggle('selected-dark');
        hottea_br.classList.toggle('selected-dark');
        coffee_br.classList.toggle('selected-dark');
        coldtea_br.classList.toggle('selected-dark');

        //lunch
        pizza.classList.toggle('selected-dark');
        salad.classList.toggle('selected-dark');
        hamburger.classList.toggle('selected-dark');
        juice_lu.classList.toggle('selected-dark');
        beer_lu.classList.toggle('selected-dark');
        coldtea_lu.classList.toggle('selected-dark');
        soda_lu.classList.toggle('selected-dark');
        wine_lu.classList.toggle('selected-dark');
        water_lu.classList.toggle('selected-dark');

        //dinner
        pasta.classList.toggle('selected-dark');
        soup.classList.toggle('selected-dark');
        shrimp.classList.toggle('selected-dark');
        juice_di.classList.toggle('selected-dark');
        soda_di.classList.toggle('selected-dark');
        coffee_di.classList.toggle('selected-dark');
        wine_di.classList.toggle('selected-dark');
        coldtea_di.classList.toggle('selected-dark');
        milk_di.classList.toggle('selected-dark');
        beer_di.classList.toggle('selected-dark');
        water_di.classList.toggle('selected-dark');

        //dessert
        cake.classList.toggle('selected-dark');
        pie.classList.toggle('selected-dark');
        macaroni.classList.toggle('selected-dark');
        juice_de.classList.toggle('selected-dark');
        soda_de.classList.toggle('selected-dark');
        coffee_de.classList.toggle('selected-dark');
        wine_de.classList.toggle('selected-dark');
        coldtea_de.classList.toggle('selected-dark');
        milk_de.classList.toggle('selected-dark');
        beer_de.classList.toggle('selected-dark');
        water_de.classList.toggle('selected-dark');
        hottea_de.classList.toggle('selected-dark');
    }
}

function selectChecker(object) {
    if (object.name.classList.contains('unselected')) {
        object.name.classList.add('selected', 'selected_light');
        object.name.classList.remove('unselected');
    } else {
        object.name.classList.remove('selected_light', 'selected');
        object.name.classList.add('unselected');
    }
}

//función comparadora - CREAR OBJETOS QUE TENGAN EL VALOR DE CALORIAS

function comparer(object, object2) {
    if (!object.classList.contains('selected')) {
        Kcal += object2.kcalValue;
    } else {
        Kcal -= object2.kcalValue;
    }
    calories.innerText = +Kcal + ' Kcal';
    if (Kcal < 1700) {
        calories.style.color = '#81b214';
    } else if (Kcal > 1699 && Kcal < 2500) {
        calories.style.color = '#f0c929';
    } else {
        calories.style.color = '#e40017';
    }
}

//actions
//breakfast
cereal.addEventListener('click', function (e) {
    comparer(cereal, cereales);
    selectChecker(cereales);
});

eggs.addEventListener('click', function (e) {
    comparer(eggs, huevos);
    selectChecker(huevos);
});

toast.addEventListener('click', function (e) {
    comparer(toast, tostadas);
    selectChecker(tostadas);
});

juice_br.addEventListener('click', function (e) {
    comparer(juice_br, jugo_br);
    selectChecker(jugo_br);
});

coffee_br.addEventListener('click', function (e) {
    comparer(coffee_br, cafe_br);
    selectChecker(cafe_br);
});

milk_br.addEventListener('click', function (e) {
    comparer(milk_br, leche_br);
    selectChecker(leche_br);
});

coldtea_br.addEventListener('click', function (e) {
    comparer(coldtea_br, tefrio_br);
    selectChecker(tefrio_br);
});

hottea_br.addEventListener('click', function (e) {
    comparer(hottea_br, tecaliente_br);
    selectChecker(tecaliente_br);
});

water_br.addEventListener('click', function (e) {
    comparer(water_br, agua_br);
    selectChecker(agua_br);
});

/*----------ALMUERZO---------- */

pizza.addEventListener('click', function (e) {
    comparer(pizza, Pizza);
    selectChecker(Pizza);
});

hamburger.addEventListener('click', function (e) {
    comparer(hamburger, hamburguesa);
    selectChecker(hamburguesa);
});

salad.addEventListener('click', function (e) {
    comparer(salad, ensalada);
    selectChecker(ensalada);
});

juice_lu.addEventListener('click', function (e) {
    comparer(juice_lu, jugo_lu);
    selectChecker(jugo_lu);
});

wine_lu.addEventListener('click', function (e) {
    comparer(wine_lu, vino_lu);
    selectChecker(vino_lu);
});

soda_lu.addEventListener('click', function (e) {
    comparer(soda_lu, sodapop_lu);
    selectChecker(sodapop_lu);
});

coldtea_lu.addEventListener('click', function (e) {
    comparer(coldtea_lu, tefrio_lu);
    selectChecker(tefrio_lu);
});

beer_lu.addEventListener('click', function (e) {
    comparer(beer_lu, cerveza_lu);
    selectChecker(cerveza_lu);
});

water_lu.addEventListener('click', function (e) {
    comparer(water_lu, agua_lu);
    selectChecker(agua_lu);
});

/*----------CENA---------- */

pasta.addEventListener('click', function (e) {
    comparer(pasta, pastas);
    selectChecker(pastas);
});

soup.addEventListener('click', function (e) {
    comparer(soup, sopa);
    selectChecker(sopa);
});

shrimp.addEventListener('click', function (e) {
    comparer(shrimp, mariscos);
    selectChecker(mariscos);
});

juice_di.addEventListener('click', function (e) {
    comparer(juice_di, jugo_di);
    selectChecker(jugo_di);
});

wine_di.addEventListener('click', function (e) {
    comparer(wine_di, vino_di);
    selectChecker(vino_di);
});

soda_di.addEventListener('click', function (e) {
    comparer(soda_di, sodapop_di);
    selectChecker(sodapop_di);
});

coldtea_di.addEventListener('click', function (e) {
    comparer(coldtea_di, tefrio_di);
    selectChecker(tefrio_di);
});

coffee_di.addEventListener('click', function (e) {
    comparer(coffee_di, cafe_di);
    selectChecker(cafe_di);
});

water_di.addEventListener('click', function (e) {
    comparer(water_di, agua_di);
    selectChecker(agua_di);
});

beer_di.addEventListener('click', function (e) {
    comparer(beer_di, cerveza_di);
    selectChecker(cerveza_di);
});

milk_di.addEventListener('click', function (e) {
    comparer(milk_di, leche_di);
    selectChecker(leche_di);
});

/*----------CENA---------- */

cake.addEventListener('click', function (e) {
    comparer(cake, pastel);
    selectChecker(pastel);
});

pie.addEventListener('click', function (e) {
    comparer(pie, pai);
    selectChecker(pai);
});

macaroni.addEventListener('click', function (e) {
    comparer(macaroni, macarrones);
    selectChecker(macarrones);
});

juice_de.addEventListener('click', function (e) {
    comparer(juice_de, jugo_de);
    selectChecker(jugo_de);
});

wine_de.addEventListener('click', function (e) {
    comparer(wine_de, vino_de);
    selectChecker(vino_de);
});

soda_de.addEventListener('click', function (e) {
    comparer(soda_de, sodapop_de);
    selectChecker(sodapop_de);
});

coldtea_de.addEventListener('click', function (e) {
    comparer(coldtea_de, tefrio_de);
    selectChecker(tefrio_de);
});

coffee_de.addEventListener('click', function (e) {
    comparer(coffee_de, cafe_de);
    selectChecker(cafe_de);
});

water_de.addEventListener('click', function (e) {
    comparer(water_de, agua_de);
    selectChecker(agua_de);
});

beer_de.addEventListener('click', function (e) {
    comparer(beer_de, cerveza_de);
    selectChecker(cerveza_de);
});

milk_de.addEventListener('click', function (e) {
    comparer(milk_de, leche_de);
    selectChecker(leche_de);
});

hottea_de.addEventListener('click', function (e) {
    comparer(hottea_de, tecaliente_de);
    selectChecker(tecaliente_de);
});
