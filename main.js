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
const ind_food_container = Array.from(
    document.getElementsByClassName("ind-food-container")
);
let Kcal = 0;
let activeDarkMode = false;
const cereal = { name: ind_food_container, kcalValue: 379, clicked: false };
const eggs = { name: ind_food_container.id, kcalValue: 109, clicked: false };
const toast = { name: ind_food_container.id, kcalValue: 313, clicked: false };

//función comparadora - CREAR OBJETOS QUE TENGAN EL VALOR DE CALORIAS
ind_food_container.forEach(clicked);
function clicked(element) {
    element.addEventListener("click", () => {
        //e.preventDefault();
        let foodID = element.id;
        console.log(typeof element);
        console.log(foodID);
        comparer(cereal);
        console.log(cereal.name);
    });
}
function comparer(object) {
    if (object.clicked == true) {
        Kcal += object.kcalValue;
        console.log(Kcal);
        object.clicked = true;
        console.log(object.clicked);
    } else {
        Kcal -= object.kcalValue;
        object.clicked = false;
        console.log(object.clicked);
    }

    calories.innerText = +Kcal + " Kcal";
}
