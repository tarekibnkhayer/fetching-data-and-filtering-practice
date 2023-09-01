const fetchData = async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const categoriesArray = await data.data;
   for(let categories of categoriesArray){
   displayCategory(categories);
   }
};
fetchData();
const displayCategory = (categories) =>{
    const categoryNameContainer = document.getElementById("category-name-container");
    const button = document.createElement("button");
    button.innerHTML = `<button onclick="loadDataBasedOnButtonClick('${categories.category_id}')" class="btn">${categories.category}</button>`;
    categoryNameContainer.append(button);
};
const loadDataBasedOnButtonClick = async (id ="1000") =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = await data.data;
    displayVideos(videos);
};
loadDataBasedOnButtonClick();
const displayVideos = (videos) =>{
    const videosContainer = document.getElementById("videos-container");
    videosContainer.innerText = ""
   for (let video of videos){
    console.log(video);
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
        <div class="w-[312px] h-[200px] rounded-lg"><img src="${video.thumbnail}" class="w-full h-full">
        
        </div>
    `;
    videosContainer.append(videoDiv);
   }
}

