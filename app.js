const searchDrink = document.getElementById("input");
// console.log(searchDrink.value);

function fetchDrinks() {
  if (searchDrink.value) {
    // console.log(searchDrink.value);
    let URL = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink.value}`;
    fetch(URL)
      .then((res) => res.json())
      .then((drinks) => showDrinks(drinks.drinks));
  } else {
    alert("Search for Drinks first");
  }
}

function showDrinks(drinks) {
  console.log(drinks);
  for (drink of drinks) {
    document.querySelector(
      ".drink-wrapper"
    ).innerHTML += ` <div class="drinks-box" onclick="lookUpDetails(${drink.idDrink})">
            <img
              src=${drink.strDrinkThumb}
              alt="#"
            />
            <h2 class="text-xl text-center text-bold text-white">${drink.strDrink}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strAlcoholic}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strCategory}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strGlass}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strIBA}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strImageAttribution}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strIngredient1}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strIngredient2}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strIngredient3}</h2>
            <h2 class="text-xl text-center text-bold text-white">${drink.strIngredient4}</h2>
          </div>`;
  }
}

function lookUpDetails(id) {
  // console.log("lookup", id);
  let URL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((drinks) => showDrinksDetails(drinks.drinks[0]));
}

function showDrinksDetails(drink) {
  const Details = document.getElementById("Details");
  Details.classList.add("visible");
  Details.classList.remove("invisible");

  Details.innerHTML = `<div class="popup bg-white w-[70%] min-h-[0px] p-10">
                <h2 class="text-2xl font-bold mb-4">${drink.strCategory}</h2>
                <h2 class="text-xl text-center text-bold">${drink.strAlcoholic}</h2>
               <h2 class="text-xl text-center text-bold ">${drink.strCategory}</h2>
               <h2 class="text-xl text-center text-bold">${drink.strGlass}</h2>
                <img
              src=${drink.strDrinkThumb}
              alt="#"
             
              class="w-[200px] h-[200px] object-cover"
            />
               
                <button onclick="closeDetails()"
                  class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  close
                </button>
              </div>`;
}

function closeDetails() {
  Details.classList.add("invisible");
  Details.classList.remove("visible");
}

const search = document.getElementById("search");
search.addEventListener("click", () => {
  fetchDrinks();
});
