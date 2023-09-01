const fetchData = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categoriesArray = await data.data;
   for(let categories of categoriesArray){
    const category = categories.category;
   displayCategory(category);
   }
};
fetchData();
const displayCategory = (category) =>{
    const categoryNameContainer = document.getElementById("category-name-container");
    const button = document.createElement("button");
    button.classList.add("btn")
    button.innerText = `${category}`;
    categoryNameContainer.append(button);
}