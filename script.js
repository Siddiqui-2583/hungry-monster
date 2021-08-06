fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then((res) => res.json())
  .then((data) => showMeals(data.meals.slice(0,8)));

function showMeals(data) {
//   console.log(data);
  let lists = "";
  data.forEach((meal) => {
    lists =
      lists +
      `<div class="meal">
            <img src="${meal.strMealThumb}" alt="">
            <p>${meal.strMeal}</p>  
                
        </div>`;
  });
  const ul = document.getElementById("product-grid");
  ul.innerHTML = lists;
}
