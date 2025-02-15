/* eslint-disable no-unused-vars */

const images = [
  "https://64.media.tumblr.com/ede72075ccd067d644e4bd4eb2c0fd76/68d8969ac1a5b5e5-d3/s1280x1920/9211d790fb92f5422a5d68b030bad96353dc7c72.png", //dracula
  "https://64.media.tumblr.com/fdb584a5d2f92fd94665619da24c9918/bd8fb3e0102ca426-07/s1280x1920/741133439085ff610ee4b0ede65b2bcad20a1ebf.png", //the truman show
  "https://64.media.tumblr.com/47d187e341877257d3ae58f453a5ee02/3169d97aa0b624af-69/s1280x1920/3337324a8eb15ecc9fe68700e71d7f9d9b6a71bb.png", //portrait of a lady on fire
  "https://64.media.tumblr.com/7b738c27a429d4b8144f220a5579dab5/e1dd07d62e3bc192-d1/s1280x1920/1bd2a1180f7ca29d723f95326dd0862cb44f71cb.png", //jojo rabbit
  "https://64.media.tumblr.com/5b31bea5e06c7ad10c3ab76201db6c92/199a48091afd45cb-2a/s1280x1920/705eb367c04c3a1fed89fe824b9a4cdc7d262872.png", //parasite
  "https://64.media.tumblr.com/4b4ae5622792ca11a3c8b7816b4cb86e/30c1d9ffdffe13d1-c2/s1280x1920/39f3e991e7df0764be58c35e89db221812dece41.jpg", //killers of the flower moon
  "https://64.media.tumblr.com/fc215da3c80a27286dfa1631dd8eeb80/e2aafbc72cbd1816-f1/s1280x1920/f7b97284356e26c0a0e4e4c82dcd29d75fd8ae05.png", //psycho
  "https://64.media.tumblr.com/0584c0878b2d99bd5a2c2822263236a8/a937ff8a7dc98c07-26/s1280x1920/0ea0590d17a0bf05b4433592b7602f9983126e92.png", //dead poet's society
  "https://64.media.tumblr.com/35c587d43c8386e78c00c2c27e3d6664/4fa2291ad6f83e49-46/s1280x1920/3958fae0b6df4cee5f195c71523b0d5ae68eb3ac.png", //notting hill
  "https://64.media.tumblr.com/9744bc357a93b3c2ad969df42055191d/tumblr_puqyndWs3t1t10zkyo1_1280.jpg", //dark
  "https://64.media.tumblr.com/12662678d2608a6b55a761b8ca219361/10df6747218b0350-18/s1280x1920/b93bfc28ff9ba6ff2340d7e304b1a9a1a537725c.png", //ted lasso
  "https://64.media.tumblr.com/2bdb9443aec08556acbb40e1fad00441/e3cab569cd4ce826-98/s1280x1920/daffd1d4e6b472bb663480208533d2e346537741.png", //pulp fiction
  "https://64.media.tumblr.com/c16534cbadeca3a84511608a246981a1/56de66cb8384b2ae-2c/s1280x1920/89b867248988058f85632d7bcbc9c521a9fd03bb.jpg", //reservoir dogs
  "https://64.media.tumblr.com/9904b999d28c9cf731f861c2184c6770/5849734f5bfb8a71-a6/s1280x1920/82636b552be2c69f7a0b50d40b6b673179f76f0b.png", //hot fuzz
  "https://64.media.tumblr.com/a9f4ba7b41ebb57b80081d0d3d3018e8/cae3d3f4b367a2a6-f5/s1280x1920/62c9199ec73b1f72142b90fef64a142618e52822.png", //the great
  "https://64.media.tumblr.com/d5c3405abfd0f878eaeed87d6318661d/be444bd66aeff95e-73/s1280x1920/da95a449202dc2358979cedd6e2ac5dd1f88b8e2.png", //the shining
];

//BANNER//
let currentBanner = "";

function changeBannerImage() {
  const bannerImage = document.getElementById("bannerImage");
  const newBanner = images[Math.floor(Math.random() * images.length)];

  if (currentBanner !== newBanner) {
    bannerImage.src = newBanner;
    currentBanner = newBanner;
  }
}

window.onload = changeBannerImage;

//NAV MENU//
const toggleMenu = () => {
  document.querySelector(".nav-items").classList.toggle("show");
};

//SEARCH//
const items = [
  { name: "The Penguin", url: "focus.html" },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    url: "article.html",
  },
  { name: "Dragon Age II", url: "article.html" },
];

const resultsContainer = document.createElement("div");
resultsContainer.className = "results-container";
document.body.appendChild(resultsContainer);

const searchItems = () => {
  const input = document.getElementById("search-input").value.toLowerCase();
  const results = items.filter((item) =>
    item.name.toLowerCase().startsWith(input)
  );

  resultsContainer.innerHTML = "";

  results.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    div.onclick = () => (window.location.href = item.url);
    resultsContainer.appendChild(div);
  });

  resultsContainer.style.display = results.length > 0 ? "block" : "none";
  positionResultsContainer();
};

const positionResultsContainer = () => {
  const searchInput = document.getElementById("search-input");

  const inputRect = searchInput.getBoundingClientRect();

  resultsContainer.style.position = "absolute";
  resultsContainer.style.top = `${inputRect.bottom + window.scrollY}px`;
  resultsContainer.style.left = `${inputRect.left}px`;
  resultsContainer.style.width = `${inputRect.width}px`;
};

document.getElementById("search-input").addEventListener("input", searchItems);

document.addEventListener("click", (event) => {
  const isClickInside =
    resultsContainer.contains(event.target) ||
    event.target.id === "search-input";

  if (!isClickInside) {
    resultsContainer.style.display = "none";
  }
});

//DARK MODE//
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.getElementById("darkModeToggle").checked =
    document.body.classList.contains("dark-mode");
};

//STAR RATING//
document.addEventListener("DOMContentLoaded", () => {
  const abstractContainers = document.querySelectorAll(".abstract-container");

  function createStar(className) {
    const star = document.createElement("i");
    star.className = className;
    star.style.opacity = "0";
    return star;
  }

  function animateStars(stars) {
    stars.forEach((star, index) => {
      setTimeout(() => {
        star.style.opacity = "1";
      }, index * 150);
    });
  }

  abstractContainers.forEach((container) => {
    const starRating = container.querySelector(".star-rating");
    const fillValue = parseFloat(starRating.getAttribute("data-fill"));
    const fullStars = Math.floor(fillValue);
    const hasHalfStar = fillValue % 1 >= 0.5;

    const stars = [];
    for (let i = 0; i < 5; i++) {
      let starClass;
      if (i < fullStars) {
        starClass = "fa-solid fa-star";
      } else if (hasHalfStar && i === fullStars) {
        starClass = "fa-regular fa-star-half-stroke";
      } else {
        starClass = "fa-regular fa-star";
      }
      stars.push(createStar(starClass));
    }

    stars.forEach((star) => starRating.appendChild(star));

    //intersection observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStars(stars);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(container);
  });
});

//SHOW MORE//
const toggleMoreAbstracts = () => {
  const moreAbstracts = document.getElementById("moreAbstracts");
  moreAbstracts.style.display =
    moreAbstracts.style.display === "none" ? "block" : "none";
};

//TOP BUTTON//
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script is running");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let mybutton = document.getElementById("topBtn");
    let scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, & Opera
  }

  //GALLERY//
  filterSelection("all");

  function filterSelection(filter) {
    const elements = document.getElementsByClassName("column");

    if (filter === "all") filter = "";

    console.log("Filtering for:", filter);

    for (let i = 0; i < elements.length; i++) {
      removeClass(elements[i], "show");

      if (elements[i].className.includes(filter)) {
        addClass(elements[i], "show");
      }
    }
  }

  function addClass(element, className) {
    const currentClasses = element.className.split(" ");

    if (!currentClasses.includes(className)) {
      currentClasses.push(className);
      element.className = currentClasses.join(" ");
    }
  }

  function removeClass(element, className) {
    const currentClasses = element.className.split(" ");

    const updatedClasses = currentClasses.filter((cls) => cls !== className);
    element.className = updatedClasses.join(" ");
  }

  document
    .querySelector(".showAllBtn")
    .addEventListener("click", () => filterSelection("all"));

  const mediumButtons = document.querySelectorAll(".mediumBtn");
  mediumButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button
        .getAttribute("aria-label")
        .toLowerCase()
        .split(" ")[2];
      filterSelection(filterValue);
    });
  });

  const genreButtons = document.querySelectorAll(".genreBtn");
  genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button
        .getAttribute("aria-label")
        .toLowerCase()
        .split(" ")[2];
      filterSelection(filterValue);
    });
  });
});

//EMAIL VALIDATION//
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (data.email && !emailPattern.test(data.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (event.target.id === "suggestionForm") {
    alert("Thank you for your message! We appreciate your thoughts.");
  } else if (event.target.id === "subscribeForm") {
    alert(
      "Thank you for subscribing! We'll keep you updated with our latest content."
    );
  } else if (event.target.classList.contains("comment-box")) {
    const { name, comment } = data;
    if (name && comment) {
      alert(`Thank you for your comment, ${name}!`);
    } else {
      alert("Please fill in all fields.");
    }
  }
};
