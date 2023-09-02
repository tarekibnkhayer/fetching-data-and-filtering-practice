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
    button.innerHTML = `<button onclick="loadDataBasedOnButtonClick('${categories?.category_id}')" class="btn">${categories?.category}</button>`;
    categoryNameContainer.append(button);
};
const loadDataBasedOnButtonClick = async (id ="1000") =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = await data.data;
    if(videos.length === 0){
      const videosContainer = document.getElementById("videos-container");
      videosContainer.innerText = "";
      const noVideosContainer = document.getElementById("no-videos-container");
      noVideosContainer.innerHTML = ``
      const noDataDiv = document.createElement("div");
      noDataDiv.innerHTML = `<div class ="flex justify-center items-center"><img src="images/Icon.png"></div>
      <p class="text-center text-3xl font-bold leading-10">Oops!! Sorry, There is no <br> content here</p>
      `;
      noVideosContainer.append(noDataDiv);
    }
    else{
      const noVideosContainer = document.getElementById("no-videos-container");
      noVideosContainer.innerText = ""
      displayVideos(videos);}
};
loadDataBasedOnButtonClick();
const displayVideos = (videos) =>{
    const videosContainer = document.getElementById("videos-container");
    videosContainer.innerText = ""
   for (let video of videos){
    console.log(video);
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
       <div> <div class="w-[312px] h-[200px] rounded-lg mb-5"><img src="${video?.thumbnail}" class="w-full h-full">
       </div>
       <div class="bg-black rounded text-white  relative bottom-16 left-24 w-52 px-5">${video.others.posted_date?(Math.floor((video?.others?.posted_date)/3600)).toFixed(0)+"hours" +((Math.floor(video.others.posted_date)% 3600)/60).toFixed(0) + "min ago":""}</div>
       </div>
      <div class="flex items-center gap-3">  <div class="w-10 h-10"><img src="${video?.authors[0]?.profile_picture}" class="rounded-full w-full h-full"></div>
      <p class="text-lg leading-7 font-bold">${video?.title}</p>
      </div>
      <div class= "flex gap-2"><p class="ml-14 text-[#171717B3] text-[14px] font-normal">${video?.authors[0]?.profile_name}</p>
      <div>${video?.authors[0]?.verified?"<img src='images/verified.jpg' class='w-5 h-5'>":""}</div>
      </div>
      <p class="ml-14 text-[#171717B3] text-[14px] font-normal">${video?.others?.views} views</p>
    `;
    videosContainer.append(videoDiv);
   };
  
}
