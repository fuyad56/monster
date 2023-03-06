const getMeal = () => {
  const mealInput = document.getElementById("meal-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals))
    .catch(console.error(error));
};
const displayMeals = (meals) => {
  const mealsItem = document.getElementById("meals-item");
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "d-flex justify-content-evenly";
    mealDiv.innerHTML = `<a href="" style="text-decoration: none; color: black;">
    <div class="card border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
        <img src="${meal.strMealThumb}" class="card-img-top" border-radius: 10px 10px 0 0" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
        </div>
    </div>
</a>`;
    mealsItem.appendChild(mealDiv);
  });
};
