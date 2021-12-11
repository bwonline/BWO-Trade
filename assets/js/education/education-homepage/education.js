// FUNCTIONS
const createCTA_FTT = (arr) => {
  return arr.map(({ text, image }) => {
    return `
        <div class="col-md-3 col-xs-6">
            <div class="fastTrack">
                <img src="https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/one-day-fast-track-training/${image}" loading="lazy" alt="${text}" title="${text}" />
                <p>${text}</p>
            </div> 
        </div>`;
  });
};

const createCard_Educators = (arr) => {
  return arr.map(({ name, image, jobTitle, bio, qualifications, ig }) => {
    return `
      <div class="col-md-4 col-xs-12">
        <div class="card">
          <img src="https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/meet-our-educators/${image}" class="card-img-top" loading="lazy" alt="${name} - ${jobTitle}" title="${name} - ${jobTitle}" />
          <div class="card-body">
            <h5 class="card-title educator-names">${name}</h5>
            <h6>${jobTitle}</h6>
            <div class="educator-bio">
              <p class="card-text">
                ${bio}
                ${qualifications}
              </p>
            </div>
            <a href="https://www.instagram.com/${ig}/" target="_blank" class="educator-IG" title="${name} - ${jobTitle}">
              <i class="fa fa-instagram" aria-hidden="true"></i>${ig}
            </a>
          </div>
        </div>
      </div>`;
  });
};

const createCard_Courses = (arr) => {
  return arr.map(({ url, image, course_title }) => {
    return `
          <div class="col-lg-3 col-md-6 col-xs-12">
              <div class="card">
                  <a href="https://beautyworks.com/${url}" title="View Dates for ${course_title}">
                      <img class="card-img-top" src="https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/${image}"
                          alt="View Dates for ${course_title}" title="View Dates for ${course_title}" />
                  </a>
                  <div class="card-body">
                      <a href="https://beautyworks.com/${url}" title="View Dates for ${course_title}" >
                          <h5 class="card-title">${course_title}</h5>
                      </a>
                      <a href="https://beautyworks.com/${url}" class="card-btn"
                          title="View Dates for ${course_title}">View Dates</a>
                  </div>
              </div>
          </div>
      `;
  });
};

// VARIABLES
let education_FTT = [
  {
    text: "Offer award winning hair",
    image: "beauty-works-offer-award-winning-hair.jpg",
  },
  {
    text: "Professional hair extension kit worth £300",
    image: "professional-hair-extension-kits.jpg",
  },
  { text: "Marketing material", image: "marketing-material.jpg" },
  {
    text: "Become a Beauty Works certified stylist",
    image: "become-beauty-works-certified-stylist.jpg",
  },
  {
    text: "Access to exclusive trade prices",
    image: "exclusive-trade-prices.jpg",
  },
  {
    text: "Manager assigned to your account",
    image: "dedicated-account-manager.jpg",
  },
  {
    text: "Enjoy Beauty Works promotions",
    image: "hair-extension-promotions.jpg",
  },
  { text: "Join conferences & events", image: "conferences-and-events.jpg" },
];

let educators = [
  {
    name: "Dawn",
    image: "trainer-dawn1.jpg",
    jobTitle: "Head of Education",
    bio: `Dawn has been working with hair extensions for over 13 years, she has a certificate in education, all levels of hairdressing and an assessor’s award. Since working with BW Dawn has taught over 2000 students, training in both Manchester and London weekly. Dawn’s specialist skills makes her an expert in all aspects of hair.`,
    qualifications: `<ul><li>Level 1, 2, 3 NVQ apprenticeship in hairdressing</li><li>Cert ED (Certificate of Education)</li><li>A1 & A2 Assessor Award</li><li>IQA Internal Quality Assurance (IQA)</li></ul>`,
    ig: "dawn_louise_hair",
  },
  {
    name: "Emily",
    image: "trainer-emily2.jpg",
    jobTitle: "Educator",
    bio: `Emily has trained with BW for over 5 years and has worked on photo shoots and hair trade events around the UK. She counts Celebrities including Molly Mae, Maura Higgins and Olivia Atwood as client. Her specialists skills in hair extension application make her highly Experienced in all methods of hair extension application and removal.`,
    qualifications: `<ul><li>Level 1, 2, 3 NVQ apprenticeship in hairdressing</li><li>Award in Teacher Training (AET/PTLLS)</li></ul>`,
    ig: "emilyrosemonkhair",
  },
  {
    name: "Lenka",
    image: "trainer-lenka3b.jpg",
    jobTitle: "Educator",
    bio: `Lenka started working with hair extensions from age 17, working with BW for over 5 years assisting at photo shoots and hair trade shows, including professional hair live with celebrity hair stylist Jen Atkin. Training both in London and Manchester weekly, Lenka’s specialists skills in hair extension application make her an expert in application and removal of hair extensions.`,
    qualifications: `<ul><li>Level 1, 2, 3 NVQ apprenticeship in hairdressing</li><li>Award in Teacher Training (AET/PTLLS)</li></ul>`,
    ig: "beautyworksprofessional",
  },
];

let courses = [
  {
    url: "ultimate-tape-extension-course",
    image: "Ultimate_Tape_Extension_Courses2.jpg",
    course_title: "The Ultimate Tape Extension Course",
  },
  {
    url: "creative-mix-1-course",
    image: "The_Creative_Mix_1_Course2.jpg",
    course_title: "The Creative Mix 1 Course",
  },
  {
    url: "creative-mix-2-course",
    image: "The_Creative_Mix_2_Course2.jpg",
    course_title: "The Creative Mix 2 Course",
  },
  {
    url: "creative-mix-3-course",
    image: "Complete_Micro_Ring_Course2.jpg",
    course_title: "The Creative Mix 3 Course",
  },
];

// FUNCTION CALLS
render(createCTA_FTT(education_FTT), "education_fast-track-training");
render(createCard_Educators(educators), "education_Educators");
render(createCard_Courses(courses), "education_Courses");
