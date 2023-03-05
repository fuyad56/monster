const searchMeal = () => {
  const mealInput = document.getElementById("meal-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meal) => {
  const MealTitle = document.getElementById("meal-title");
  const mealPhoto = meal.strMealThumb;
  const mealName = meal.strMeal;
  meal.forEach((meal) => {
    const Div = document.createElement("div");
    Div.className =
      "col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center";
    Div.innerHTML = `<a href="#meal-details-section" style="text-decoration: none; color: black;">
    <div onclick="getMealDetails(${meal.idMeal})" class="card border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
        <img src="${mealPhoto}" class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${mealName}</h5>
        </div>
    </div>
</a>`;
    MealTitle.appendChild(Div);
  });
};