// FUNCTIONS
const createCTA = (arr) => {
  return arr.map(({ title, url, image, description, col, size }) => {
    return `
        <div class="col-md-${col} col-xs-12">
            <div class="card">
                <a href="https://beautyworks.com/${url}">
                    <img loading="lazy" src='https://beautyworks.com/media/wysiwyg/tradeHome2020/${image}'
                        alt="Beauty Works ${title}" title="Beauty Works ${title}" />
                </a>
                <a href="https://beautyworks.com/${url}">
                    <h3 class="card-title">${title}</h3>
                </a>
                <p class="card-text ${size}-CTA">${description}</p>
                <a class="card-btn" href="https://beautyworks.com/${url}">Shop Now</a>
            </div>
        </div>`;
  });
};

const generateVideoCard = (arr) => {
  return arr.map(
    ({
      vimeoID,
      videoText,
      productName,
      productURL,
      schemaName,
      schemaDescription,
    }) => {
      return `
        <div class="col-md-6 col-xs-12">
          <div class="card">
            <div class="embed-container">
              <iframe loading="lazy" src="https://player.vimeo.com/video/${vimeoID}" class="tutorialEmb" 
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              <script type="application/ld+json">
                {
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  "name": "${schemaName}",
                  "description": "${schemaDescription}",
                  "contentUrl": "https://vimeo.com/${vimeoID}",
                  "embedUrl": "https://player.vimeo.com/video/${vimeoID}"
                }
              </script>
            </div>
            <p class="vidText">${videoText}"</p>
            <a class="card-btn" href="https://beautyworks.com/${productURL}">Shop ${productName}</a>
          </div>
        </div>
      `;
    }
  );
};

// VARIABLES
let hompageCTAs = {
  large: [
    {
      title: "Weft Extensions",
      image: "Wefts.jpg",
      url: "professional-extensions/weft-extensions.html",
      description: `Select from our 100% Cuticle Remy hair extension wefts. Weft
          extensions can be applied with absolutely no heat, no glue and no
          braid!`,
      col: "6",
      size: "lg",
    },
    {
      title: "Micro Rings",
      image: "beauty_works_micro_rings.png",
      url: "professional-extensions/micro-ring-extensions.html",
      description: `With no glue or substances applied to the natural hair. Discover why
          salon professionals love the micro ring hair extensions.`,
      col: "6",
      size: "lg",
    },
  ],
  small: [
    {
      title: "Nano Bonds",
      image: "beauty_works_nano_bonds.png",
      url: "professional-extensions/micro-ring-extensions/nano-bond.html",
      description: `Specialists in Micro Ring, Beauty Works Nano bond is a tiny bond that
          attaches at the root of the hair with the smallest ring system available.
          Using the finest 100% Remy cuticle hair, each 1g strand is specifically designed
          to fit with our colour coded copper micro rings.`,
      col: "4",
      size: "sm",
    },
    {
      title: "Invisi-Tapes",
      image: "Invisi_Tape.jpg",
      url: "professional-extensions/tape-extensions/invisi-tape.html",
      description: `Designed by professionals for professionals, Invisi®Tape is renowned
          in the industry for offering the best in terms of quality and design.
          Crowned at The Hair Awards as winner of ‘Best European Hair
          Extensions’ Invisi® Tape is globally recognised as the go-to extension
          for the most invisible feel.`,
      col: "4",
      size: "sm",
    },
    {
      title: "Clip-In Extensions",
      image: "Blonde_Clip-Ins.jpg",
      url: "clip-in-hair-extensions.html",
      description: `Beauty Works Award winning Clip-in extensions offer Deluxe Clip-In's
          for a natural finish or our Double Hair Sets for fuller, thicker sets.
          Crafted from 100% real human hair, discover our award winning sets.`,
      col: "4",
      size: "sm",
    },
    {
      title: "Aftercare",
      image: "beauty_works_aftercare.png",
      url: "haircare.html",
      description: `Covering many hair concerns with Sulphate, SLS and Paraffin free,
          vegan friendly and After Sun Colour-Fade ranges, Beauty Works offers
          the perfect solution with a selection of hair care that has been
          developed to expand the lifespan and performance of your hair
          extensions.`,
      col: "4",
      size: "sm",
    },
    {
      title: "Styling Tools",
      image: "Styling-Tools-Pro-CTA.jpg",
      url: "styling-tools.html",
      description: `Seen it on the gram? Our award winning collection of stylers give you
          selfie ready hair at home. Wave it for days with the mermaid waver or
          keep curls bouncy with the Professional styler, featuring extra-long
          barrels to heat hair equally from root to tip.`,
      col: "4",
      size: "sm",
    },
    {
      title: "Marketing Materials",
      image: "beauty_works_marketing_materials-pro-tools.jpg",
      url: "marketing-materials.html",
      description: `Promote and attract new and existing business in your salon with a
          range of marketing opportunities for both digital and in salon
          environments.`,
      col: "4",
      size: "sm",
    },
  ],
};

let tutorials = [
  {
    vimeoID: "522695770",
    videoText:
      "Watch our guide on how to apply Beauty Works Invisi®Tape hair extensions featuring celebrity hair stylist Jay Birmingham. This video shows how this award-winning method can work for you and your clients, offering a discreet application using patented Invisi®technology. The mesh tape tab mimics the natural re-growth at the hair's root, creating a transformation that is virtually undetectable.",
    productName: "Invisi®Tape Extensions",
    productURL: "professional-extensions/tape-extensions/invisi-tape.html",
    schemaName:
      "BEAUTY WORKS | HOW TO APPLY CELEBRITY CHOICE STICK TIP HAIR EXTENSIONS",
    schemaDescription:
      "How to apply Beauty Works Stick Tip hair extensions featuring celebrity hair stylist Jay Birmingham",
  },
  {
    vimeoID: "522695400",
    videoText:
      'Discover Beauty Works Celebrity Choice® Nanobond® hair extensions featuring celebrity hair stylist Jay Birmingham. Available in 18", 20" & 24" lengths, this no-glue micro ring method is applied and attached using tiny copper rings, coloured to match the root of the hair perfectly for a seamless and discreet blend. Choose from over 40 unique shade blends.',
    productName: "Celebrity Choice® Nanobond®",
    productURL: "professional-extensions/micro-ring-extensions.html",
    schemaName: "BEAUTY WORKS | HOW TO APPLY INVISI TAPE EXTENSIONS",
    schemaDescription:
      "How to apply Beauty Works Invisi®Tape hair extensions featuring celebrity hair stylist Jay Birmingham",
  },
];

// FUNCTION CALLS
render(createCTA(hompageCTAs.large), "homepage-lg_CTAs");
render(createCTA(hompageCTAs.small), "homepage-sm_CTAs");
render(generateVideoCard(tutorials), "homeTutorials");
