// ==================================================================
const empProfileEl = document.querySelector(".emp-profiles");
const showMoreButtonEl = document.getElementById("show-more-button");
const keyAccess = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";


const profileEmpEl = "Veterinarian";
let dataInput = "";
let page = 1;

page = 1;
employeeImages();
async function employeeImages() {
    dataInput = profileEmpEl;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${dataInput}&client_id=${keyAccess}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        empProfileEl.innerHTML = "";
    }

    const results = data.results;

    results.slice(0, 9).map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("profile-emp");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        empProfileEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMoreButtonEl.style.display = "block";
    }
}

showMoreButtonEl.addEventListener("click", () => {
    employeeImages();
});
