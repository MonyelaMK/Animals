//==========================Navbar======================================
const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

//=========================Header btn====================================
const btnEl = document.querySelector(".btn-vid-js");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");

video.play();
btnEl.addEventListener("click", () => {
    if (btnEl.classList.contains("pause")) {
        btnEl.classList.remove("pause");
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    } else {
        btnEl.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }
});

//========================Home Container 4 cards to 8============================
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const containerImagesEl = document.querySelector(".card-wrap");

let inputData = "";
// const arrayAnimals = []         //Random names
const searchInputEl = "animal";
// let page = Math.floor((Math.random() * 10) + 1);

searchImages();
async function searchImages() {
    inputData = searchInputEl;
    const url = `https://api.unsplash.com/search/photos?page=${Math.round(
        Math.random() * 1000)}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    // console.log(results);

    const newArray = results.slice(0, 8).map((result) => {
        // console.log(result);
        const imageLink = document.createElement("a");
        imageLink.classList.add("text-link")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("card");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        containerImagesEl.appendChild(imageWrapper);
    });
}