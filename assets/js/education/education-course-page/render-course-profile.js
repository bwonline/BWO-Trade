// VARIABLES
let pageURL = window.location.pathname.split("");
pageURL.shift();
pageURL = pageURL.join("");
let profilePage = courses[urlKey[pageURL]];
const courseTitle = profilePage.title;
const courseDescription = profilePage.description;
const coursePrice = profilePage.price;
const courseURL = profilePage.url;
const courseImage = profilePage.image;
const profile = document.getElementById("courseProfilePage");

profile.innerHTML = `
<div class="col-md-4 col-xs-12">
  <img src="${courseImage}" alt="${courseTitle}" title="${courseTitle}" />
</div>
<div class="col-md-8 col-xs-12">
  <h2 class="cta-title">${courseTitle}</h2>
  <p>${courseDescription}</p>
</div>
`;
