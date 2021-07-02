const getStarted = document.querySelector("#getStarted>p");
const CatAndDog = document.getElementById("CatAndDog");

//background blur on hover of button
getStarted.addEventListener("mouseover", () => {
  document.getElementById("background").style.filter = "blur(6px)";
  document.getElementById("background").style.transition = "all 300ms";
});
getStarted.addEventListener("mouseout", () => {
  document.getElementById("background").style.filter = "blur(0px)";
});

//blurring the background and the appearance of dog and cat breed selection
getStarted.addEventListener("click", () => {
  getStarted.style.display = "none";
  getStarted.style.transition = "all 100ms";
  CatAndDog.style.display = "grid";

  document.getElementById("dogs").style.animation = "slideLeft 2s 1";
  document.getElementById("cats").style.animation = "slideRight 2s 1";
});
setInterval(() => {
  if (CatAndDog.style.display == "grid") {
    document.getElementById("background").style.filter = "blur(6px)";
    document.getElementById("background").style.transition = "all 300ms";
  }
});

//fetching the all dogs breed data from server
async function dogFetch() {
  const dogResponse = await fetch("https://dog.ceo/api/breeds/list/all");
  const dogData = await dogResponse.json();
  createDogList(dogData.message);
}
dogFetch();

//creating options inside select using the fetched data
createDogList = (dogBreedList) => {
  document.getElementById("dogsList").innerHTML = `
    <select class="optionBgColor" onchange="dogBreedChange(this.value)">
    <option> Choose your favorite breed</option>
  ${Object.keys(dogBreedList).map((breed) => {
    return `<option> ${breed} </option>`;
  })}
    </select>
  `;
};

//fetching all cats breed data from the server
async function catFetch() {
  const catResponse = await fetch("https://api.thecatapi.com/v1/breeds");
  const catData = await catResponse.json();
  createCatList(catData);
}

catFetch();

//creating options inside select using the fetched data
createCatList = (catData) => {
  document.getElementById("catsList").innerHTML = `
  <select class="optionBgColor" onchange="catBreedChange(this.value)">
  <option> Choose your favorite breed</option>
${Object.values(catData).map((breed) => {
  return `<option> ${breed.name} </option>`;
})}
  </select>
`;
};

//change in option value dog and cat

async function dogBreedChange(dogBreedValue) {
  if (dogBreedValue != "Choose your favorite breed") {
    document.getElementById("goDog").style.visibility = "visible";
    const fetchingDogBreed =
      await fetch(` https://dog.ceo/api/breed/${dogBreedValue}/images
    `);
    const selectedDogBreed = await fetchingDogBreed.json();
    console.log(selectedDogBreed);
  } else {
    document.getElementById("goDog").style.visibility = "hidden";
  }
}
catBreedChange = (catBreedValue) => {
  if (catBreedValue != "Choose your favorite breed") {
    document.getElementById("goCat").style.visibility = "visible";
  } else {
    document.getElementById("goCat").style.visibility = "hidden";
  }
};
