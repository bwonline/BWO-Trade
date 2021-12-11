const generateCTA = (arr, node, className) => {
  return arr.forEach(({ image, name, description, URL, col, id }) => {
    let li = document.createElement("li");
    li.setAttribute("id", `${id}`);
    li.setAttribute("class", `${className}`);
    li.innerHTML = `
          <div class="${col}">
            <div class="card">
              <a href="https://beautyworks.com/${URL}" title="${name}">
                <img class="card-img-top" src="https://beautyworks.com/media/wysiwyg/${image}" alt="${name}" title="${name}"/>
              </a>
              <div class="card-body">
                <a href="https://beautyworks.com/${URL}" title="${name}">
                  <h5 class="card-title">${name}</h5>
                </a>
                <p class="card-text">${description}</p>
                <a href="https://beautyworks.com/${URL}" class="card-btn" title="${name}">Shop ${name}</a>
              </div>
            </div>
          </div>`;
    node.appendChild(li);
  });
};

const categories = [
  {
    "clip-in-hair-extensions": [
      {
        image: "clip-in-hair-extensions-category/Clip-in-double-hair-set.jpg",
        name: "Double Hair Set",
        description: `
                <ul>
                  <li>Fuller Thicker sets</li>
                  <li>100% Remy Hair</li>
                  <li>Double Wefted</li>
                  <li>180g - 210g</li>
                  <li>Lengths 18”- 26"</li>
                </ul>`,
        URL: "clip-in-hair-extensions/shop-by-collection/double-hair-set.html",
        col: "col-lg-3 col-md-4 col-xs-12",
        id: "dblHairSet",
        lengths: [
          {
            image:
              "clip-in-hair-extensions-category/double-hair-set/18-dhs.jpg",
            name: 'Double Hair Set 18"',
            description: `
                <ul>
                    <small>
                        <li>180g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Medium, thickness</li>
                    </small>
                </ul>`,
            URL: "18-double-hair-set.html",
            col: "col-md-3 col-xs-12",
            id: "dhs18",
          },
          {
            image:
              "clip-in-hair-extensions-category/double-hair-set/20-dhs.jpg",
            name: 'Double Hair Set 20"',
            description: `
                <ul>
                    <small>
                        <li>210g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Ultimate thickness</li>
                    </small>
                </ul>`,
            URL: "20-double-hair-set.html",
            col: "col-md-3 col-xs-12",
            id: "dhs20",
          },
          {
            image:
              "clip-in-hair-extensions-category/double-hair-set/22-dhs.jpg",
            name: 'Double Hair Set 22"',
            description: `
                <ul>
                    <small>
                        <li>220g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Super thickness</li>
                    </small>
                </ul>`,
            URL: "22-double-hair-set.html",
            col: "col-md-3 col-xs-12",
            id: "dhs22",
          },
          {
            image:
              "clip-in-hair-extensions-category/double-hair-set/26-dhs.jpg",
            name: 'Double Hair Set 26"',
            description: `
                <ul>
                    <small>
                        <li>290g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Extra long length, maximum thickness</li>
                    </small>
                </ul>`,
            URL: "26-double-hair-set.html",
            col: "col-md-3 col-xs-12",
            id: "dhs26",
          },
        ],
      },
      {
        image: "clip-in-hair-extensions-category/Clip-in-deluxe-hair-set.jpg",
        name: "Deluxe Clip-Ins",
        description: `
              <ul>
                <li>Natural volume sets</li>
                <li>100% Remy Hair</li>
                <li>Double Wefted</li>
                <li>140g</li>
                <li>Lengths 16”-20”</li>
              </ul>`,
        URL: "clip-in-hair-extensions/shop-by-collection/deluxe-clip-ins.html",
        col: "col-lg-3 col-md-4 col-xs-12",
        id: "deluxeHairSet",
        lengths: [
          {
            image:
              "clip-in-hair-extensions-category/deluxe-hair-set/Clip-in-deluxe-hair-set-16inch.jpg",
            name: 'Deluxe Clip-Ins 16"',
            description: `
                <ul>
                    <small>
                        <li>140g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Natural thickness</li>
                    </small>
                </ul>`,
            URL: "16-deluxe-remy-instant-clip-in-extensions.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "dcl16",
          },
          {
            image:
              "clip-in-hair-extensions-category/deluxe-hair-set/18-deluxe.jpg",
            name: 'Deluxe Clip-Ins 18"',
            description: `
                <ul>
                    <small>
                        <li>140g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Natural thickness</li>
                    </small>
                </ul>`,
            URL: "18-deluxe-remy-instant-clip-in-extensions.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "dcl18",
          },
          {
            image:
              "clip-in-hair-extensions-category/deluxe-hair-set/Clip-in-deluxe-hair-set-20inch.jpg",
            name: 'Deluxe Clip-Ins 20"',
            description: `
                <ul>
                    <small>
                        <li>140g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Natural thickness</li>
                    </small>
                </ul>`,
            URL: "20-deluxe-remy-instant-clip-in-extensions.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "dcl20",
          },
        ],
      },
      {
        image: "clip-in-hair-extensions-category/Clip-in-ponytails.jpg",
        name: "Clip-In Ponytails",
        description: `
                <ul>
                  <li>100% Remy Hair</li>
                  <li>90g-180g</li>
                  <li>Lengths 18"-26"</li>
                </ul>`,
        URL: "ponytails/clip-in-ponytail.html",
        col: "col-lg-3 col-md-4 col-xs-12",
        id: "ponytailClipIns",
        lengths: [
          {
            image:
              "clip-in-hair-extensions-category/clip-in-ponytails/Clip-in-ponytails_18inch_Invisi-Ponytail.jpg",
            name: '18" Super Sleek Invisi® Ponytail',
            description: `
                  <ul>
                      <small>
                          <li>Invisible Design</li>
                          <li>Sleek Straight</li>
                          <li>18" Length</li>
                          <li>Weight 110g</li>
                          <li>100% Remy Hair</li>
                      </small>
                  </ul>`,
            URL: "ponytails/clip-in-ponytail/18-super-sleek-invisir-ponytail.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "cipt18",
          },
          {
            image:
              "clip-in-hair-extensions-category/clip-in-ponytails/Clip-in-ponytails_20inch_Beach-Wave-Ponytail.jpg",
            name: '20" Beach Wave Invisi® Ponytail',
            description: `
                  <ul>
                      <small>
                          <li>Invisible Ponytail</li>
                          <li>Beach Waved</li>
                          <li>20” Length</li>
                          <li>Weight 120g</li>
                          <li>100% Remy Hair</li>
                      </small>
                  </ul>`,
            URL: "ponytails/clip-in-ponytail/20-beach-wave-invisi-ponytail.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "cipt20",
          },
          {
            image:
              "clip-in-hair-extensions-category/clip-in-ponytails/Clip-in-ponytails_24inch_Insta-Braid-Ponytail.jpg",
            name: '24" Instant Braid Ponytail',
            description: `
                  <ul>
                      <small>
                          <li>Ponytail attachment</li>
                          <li>Pre sectioned</li>
                          <li>Length 24”</li>
                          <li>Weight 90g</li>
                          <li>100% Remy Hair</li>
                      </small>
                  </ul>`,
            URL: "ponytails/clip-in-ponytail/24-insta-braid-ponytail.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "cipt24",
          },
          {
            image:
              "clip-in-hair-extensions-category/clip-in-ponytails/Clip-in-ponytails_26inch_Super-Sleek-Ponytail.jpg",
            name: '26" Super Sleek Invisi® Ponytail',
            description: `
                  <ul>
                      <small>
                          <li>Invisible Ponytail</li>
                          <li>Sleek Straight</li>
                          <li>26” Length</li>
                          <li>Weight 180g</li>
                          <li>100% Remy Hair</li>
                      </small>
                  </ul>`,
            URL: "ponytails/clip-in-ponytail/26-super-sleek-ponytail.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "cipt26",
          },
        ],
      },
      {
        image:
          "clip-in-hair-extensions-category/Beach-Wave-double-hair-set.jpg",
        name: "Beach Waves - Double Hair Set",
        description: `
          <ul>
            <li>100% Remy Hair</li>
            <li>Double Wefted </li>
            <li>Pre-Waved</li>
            <li>180g - 220g</li>
            <li>Lengths 18" - 22"</li>
          </ul>`,
        URL: "clip-in-hair-extensions/beach-wave-double-hair-set-clip-ins.html",
        col: "col-lg-3 col-md-4 col-xs-12",
        id: "beachWaves",
        lengths: [
          {
            image:
              "clip-in-hair-extensions-category/beach-wave-hair-set/Clip-in-beach-wave-18inch.jpg",
            name: `18" Beach Wave Double Hair Set`,
            description: `
                <ul>
                    <small>
                        <li>180g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Medium, thickness</li>
                    </small>
                </ul>`,
            URL: "18-beach-wave-double-hair-set.html",
            col: "col-md-4 col-xs-12",
            id: "bwdhs18",
          },
          {
            image:
              "clip-in-hair-extensions-category/beach-wave-hair-set/Clip-in-beach-wave-22inch.jpg",
            name: `22" Beach Wave Double Hair Set`,
            description: `
                <ul>
                    <small>
                        <li>220g Sets</li>
                        <li>100% Remy Hair</li>
                        <li>Double Weft</li>
                        <li>Medium, thickness</li>
                    </small>
                </ul>`,
            URL: "22-beach-wave-double-hair-set.html",
            col: "col-md-4 col-xs-12",
            id: "bwdhs22",
          },
        ],
      },
      {
        image:
          "clip-in-hair-extensions-category/Clip-in-double-hair-set-half-weft.jpg",
        name: "Double Hair Set - Half Weft",
        description: `
          <ul>
            <li>100% Remy Hair</li>
            <li>Double Wefted </li>
            <li>One Clip-In Weft</li>
            <li>50g - 60g</li>
            <li>Lengths 18" - 22"</li>
          </ul>`,
        URL: "clip-in-hair-extensions/double-hairset-weft-half-weft.html",
        col: "col-lg-3 col-md-4 col-xs-12",
        id: "halfWeft",
        lengths: [
          {
            image:
              "clip-in-hair-extensions-category/double-half-weft/Clip-in-double-half-weft-18inch.jpg",
            name: `18" Double Hair Set Weft`,
            description: `
                  <ul>
                      <small>
                          <li>50g Weft</li>
                          <li>100% Remy Hair</li>
                          <li>Medium, thickness</li>
                      </small>
                  </ul>`,
            URL: "18-double-hair-set-weft.html",
            col: "col-md-4 col-xs-12",
            id: "dhshw18",
          },
          {
            image:
              "clip-in-hair-extensions-category/double-half-weft/Clip-in-double-half-weft-22inch.jpg",
            name: `22" Double Hair Set Weft`,
            description: `
                  <ul>
                      <small>
                          <li>60g Weft</li>
                          <li>100% Remy Hair</li>
                          <li>Medium, thickness</li>
                      </small>
                  </ul>`,
            URL: "22-double-hair-set-weft.html",
            col: "col-md-4 col-xs-12",
            id: "dhshw22",
          },
        ],
      },
    ],
  },
  {
    "professional-extensions": [
      {
        image:
          "professional_extensions/beauty_works_professional_extensions_tape_extensions.png",
        name: "Tape Extensions",
        description: `
          <ul>
              <small>
                  <li>Invisi® Tape</li>
                  <li>Celebrity Choice® SlimLine® Tape</li>
                  <li>Professional Tape Tools</li>
              </small>
          </ul>`,
        URL: "professional-extensions/tape-extensions.html",
        col: "col-lg-3 col-md-6 col-xs-12",
        id: "tapeExt",
        lengths: [
          {
            image:
              "professional_extensions/tape_extensions/Beauty-Work-Professional-Tape-In-Extensions-Invisi-Tape.jpg",
            name: "Invisi® Tape",
            description: `
            <ul>
              <small>
                  <li>Lengths 18" & 20"</li>
                  <li>Weight 40g-48g</li>
                  <li>100% Virgin Hair</li>
                </small>
            </ul>`,
            URL: "professional-extensions/tape-extensions/invisi-tape.html",
            col: "col-md-4 col-xs-12",
            id: "invisiTape",
            lengths: [
              {
                image:
                  "professional_extensions/tape_extensions/invisi-tape/18-inch.jpg",
                name: '18" Invisi® Tape',
                description: `
                  <ul>
                    <small>
                      <li>48g per pack</li>
                      <li>100% Virgin Hair</li>
                    </small>
                  </ul>`,
                URL: "catalog/product/view/id/2120/",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "invTape18",
              },
              {
                image:
                  "professional_extensions/tape_extensions/invisi-tape/20__Invisi_CTA.jpg",
                name: '20" Invisi® Tape',
                description: `
                  <ul>
                    <small>
                      <li>40g per pack</li>
                      <li>100% Virgin Hair</li>
                    </small>
                  </ul>`,
                URL: "20-invisi-tape-40g.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "invTape20",
              },
              {
                image:
                  "professional_extensions/tape_extensions/invisi-tape/24__Invisi_CTA.jpg",
                name: '24" Invisi® Tape',
                description: `
                  <ul>
                    <small>
                      <li>48g per pack</li>
                      <li>100% Virgin Hair</li>
                    </small>
                  </ul>`,
                URL: "24-invisir-tape-48g.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "invTape24",
              },
            ],
          },
          {
            image:
              "professional_extensions/tape_extensions/Beauty-Work-Professional-Tape-In-Extensions-SlimLine-Tape.jpg",
            name: "Celebrity Choice® SlimLine® Tape",
            description: `
              <ul>
                <small>
                    <li>Lengths 14" - 28"</li>
                    <li>48g per pack</li>
                    <li>Remy Human Hair</li>
                  </small>
              </ul>`,
            URL: "professional-extensions/tape-extensions/celebrity-choice-slim-line-tape.html",
            col: "col-md-4 col-xs-12",
            id: "ccSlimlineTape",
            lengths: [
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/14_Slimline_Tape_Extensions.jpg",
                name: '14" Slimline® Tape Extensions',
                description: `
                    <ul>
                        <small>
                            <li>48g per pack</li>
                            <li>Remy Human Hair</li>
                        </small>
                    </ul>`,
                URL: "14-slimliner-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst14",
              },
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/16_Slimline_Tape_Extensions.jpg",
                name: '16" Slimline® Tape Extensions',
                description: `
                    <ul>
                        <small>
                            <li>48g per pack</li>
                            <li>Remy Human Hair</li>
                        </small>
                    </ul>`,
                URL: "16-slim-line-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst16",
              },
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/18_Slimline_Tape_Extensions.jpg",
                name: '18" Slimline® Tape Extensions',
                description: `
                    <ul>
                        <small>
                            <li>48g per pack</li>
                            <li>Remy Human Hair</li>
                        </small>
                    </ul>`,
                URL: "18-slim-line-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst18",
              },
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/20_Slimline_Tape_Extensions.jpg",
                name: '20" Slimline® Tape Extensions',
                description: `
                <ul>
                    <small>
                        <li>48g per pack</li>
                        <li>Remy Human Hair</li>
                    </small>
                </ul>`,
                URL: "20-slim-line-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst20",
              },
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/22_Slimline_Tape_Extensions.jpg",
                name: '22" Slimline® Tape Extensions',
                description: `
                <ul>
                    <small>
                        <li>48g per pack</li>
                        <li>Remy Human Hair</li>
                    </small>
                </ul>`,
                URL: "22-slim-line-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst22",
              },
              {
                image:
                  "professional_extensions/tape_extensions/cc-slimline-tape/28_Slimline_Tape_Extensions.jpg",
                name: '28" Slimline® Tape Extensions',
                description: `
                <ul>
                    <small>
                        <li>48g per pack</li>
                        <li>Remy Human Hair</li>
                    </small>
                </ul>`,
                URL: "28-slim-line-tape-extensions.html",
                col: "col-lg-3 col-md-4 col-xs-12",
                id: "ccst28",
              },
            ],
          },
          {
            image:
              "professional_extensions/tape_extensions/Beauty-Work-Professional-Tape-In-Extension-Tools.jpg",
            name: "Professional Tape Tools",
            description: `
            <ul>
              <small>
                  <li>Tape Tabs</li>
                  <li>Shampoos & Conditioners</li>
                  <li>Applicator Tools</li>
                </small>
            </ul>`,
            URL: "professional-extensions/professional-tape-tools.html",
            col: "col-md-4 col-xs-12",
            id: "proTapeTools",
          },
        ],
      },
      {
        image:
          "professional_extensions/beauty_works_professional_extensions_weft_extensions.png",
        name: "Weft Extensions",
        description: `
          <ul>
              <small>
                  <li>Celebrity Choice® Weft</li>
                  <li>Gold Double Weft</li>
                  <li>Invisi®Weft</li>
                  <li>Professional Weft Extension Tools</li>
              </small>
          </ul>`,
        URL: "professional-extensions/weft-extensions.html",
        col: "col-lg-3 col-md-6 col-xs-12",
        id: "weftExt",
        lengths: [
          {
            image:
              "professional_extensions/weft_extensions/Beauty-Work-Professional-Weft-Extensions-Celebrity-Choice-Weft.jpg",
            name: "Celebrity Choice® Weft",
            description: `
            <ul>
                <small>
                    <li>Lengths 16”, 18”, 20” & 22”</li>
                    <li>120g Per Pack</li>
                    <li>100% Remy Hair</li>
                    <li>Double Drawn</li>
                    <li>Natural Volume</li>
                </small>
            </ul>`,
            URL: "professional-extensions/weft-extensions/celebrity-choice-weft.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "ccWeft",
            lengths: [
              {
                image:
                  "professional_extensions/weft_extensions/celebrity-choice-weft/16-inch.jpg",
                name: '16" Celebrity Choice® Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>120g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Natural Volume</li>
                </small>
              </ul>`,
                URL: "16-celebrity-choicer-weft-hair-extensions.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "ccw16",
              },
              {
                image:
                  "professional_extensions/weft_extensions/celebrity-choice-weft/18-inch.jpg",
                name: '18" Celebrity Choice® Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>120g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Natural Volume</li>
                </small>
              </ul>`,
                URL: "18-celebrity-choicer-weft-hair-extensions.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "ccw18",
              },
              {
                image:
                  "professional_extensions/weft_extensions/celebrity-choice-weft/20-inch.jpg",
                name: '20" Celebrity Choice® Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>120g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Natural Volume</li>
                </small>
              </ul>`,
                URL: "20-celebrity-choicer-weft-hair-extensions.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "ccw20",
              },
              {
                image:
                  "professional_extensions/weft_extensions/celebrity-choice-weft/22-inch.jpg",
                name: '22" Celebrity Choice® Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>120g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Natural Volume</li>
                </small>
              </ul>`,
                URL: "22-celebrity-choicer-weft-hair-extensions.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "ccw22",
              },
            ],
          },
          {
            image:
              "professional_extensions/weft_extensions/Beauty-Work-Professional-Weft-Extensions-Gold-Double-Weft.jpg",
            name: "Gold Double Weft",
            description: `
            <ul>
                <small>
                    <li>Lengths 18”, 20”, 22” & 24”</li>
                    <li>100% Remy Hair</li>
                    <li>150g-220g Per Pack</li>
                    <li>Double Drawn</li>
                    <li>Double Wefted</li>
                </small>
            </ul>`,
            URL: "professional-extensions/weft-extensions/beauty-works-gold-double-weft.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "goldDblWeft",
            lengths: [
              {
                image:
                  "professional_extensions/weft_extensions/gold-double-weft/18-inch.jpg",
                name: '18" Gold Double Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>150g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Double Wefted</li>
                </small>
              </ul>`,
                URL: "18-gold-double-weft.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "gdw18",
              },
              {
                image:
                  "professional_extensions/weft_extensions/gold-double-weft/20-inch.jpg",
                name: '20" Gold Double Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>150g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Double Wefted</li>
                </small>
              </ul>`,
                URL: "20-gold-double-weft.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "gdw20",
              },
              {
                image:
                  "professional_extensions/weft_extensions/gold-double-weft/22-inch.jpg",
                name: '22" Gold Double Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>150g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Double Wefted</li>
                </small>
              </ul>`,
                URL: "22-gold-double-weft.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "gdw22",
              },
              {
                image:
                  "professional_extensions/weft_extensions/gold-double-weft/24-inch.jpg",
                name: '24" Gold Double Weft',
                description: `
              <ul>
                <small>
                  <li>100% Remy Hair</li>
                  <li>220g Per Pack</li>
                  <li>Double Drawn</li>
                  <li>Double Wefted</li>
                </small>
              </ul>`,
                URL: "24-gold-double-weft.html",
                col: "col-lg-3 col-md-6 col-xs-12",
                id: "gdw24",
              },
            ],
          },
          {
            image:
              "professional_extensions/weft_extensions/Beauty-Work-Professional-Weft-Extensions-InvisiWeft.jpg",
            name: "Invisi®Weft",
            description: `
            <ul>
                <small>
                    <li>Lengths 18”</li>
                    <li>80g per pack</li>
                    <li>Invisible weft technology</li>
                    <li>Pure Virgin Cuticle Hair</li>
                    <li>Hand crafted</li>
                </small>
            </ul>`,
            URL: "professional-extensions/weft-extensions/invisi-weft.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "invisi_weft",
          },
          {
            image:
              "professional_extensions/weft_extensions/Beauty-Work-Professional-Weft-Extensions-Aftercare.jpg",
            name: "Weft Extension Tools",
            description: `
            <ul>
                <small>
                    <li>Hair Extension Tools</li>
                    <li>Colour Rings & Swatches</li>
                    <li>100% Vegan Aftercare</li>
                    <li>Micro Rings</li>
                    <li>Tape Tabs & Rolls</li>
                </small>
            </ul>`,
            URL: "professional-extensions/weft-extensions/professional-weft-extension-tools.html",
            col: "col-lg-3 col-md-6 col-xs-12",
            id: "proWeftTools",
          },
        ],
      },
      {
        image:
          "professional_extensions/beauty_works_professional_extensions_micro_ring_extensions.png",
        name: "Micro Ring Extensions",
        description: `
          <ul>
              <small>
                  <li>Celebrity Choice® Stick Tip</li>
                  <li>Celebrity Choice® Nano Bond</li>
                  <li>Professional Micro Ring Tools</li>
              </small>
          </ul>`,
        URL: "professional-extensions/micro-ring-extensions.html",
        col: "col-lg-3 col-md-6 col-xs-12",
        id: "microRing",
        lengths: [
          {
            image:
              "professional_extensions/micro-ring-extensions/Beauty-Work-Professional-Micro-Ring-Extensions-Celebrity-Choice-Stick-Tip.jpg",
            name: "Celebrity Choice® Stick Tip",
            description: `
            <ul>
                <small>
                    <li>50g per packet</li>
                    <li>100% Remy human hair</li>
                    <li>Lengths 18”, 20” & 24”</li>
                </small>
            </ul>`,
            URL: "professional-extensions/micro-ring-extensions/stick-tips.html",
            col: "col-md-4 col-xs-12",
            id: "ccStickTip",
            lengths: [
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-stick-tips/18_inch_stick_tips.jpg",
                name: '18" Celebrity Choice® Stick Tips',
                description: `
              <ul>
                <small>
                  <li>Length 18”</li>
                  <li>50g per pack</li>
                  <li>0.8g per bond</li>
                </small>
              </ul>`,
                URL: "18-celebrity-choicer-stick-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccst18",
              },
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-stick-tips/20_inch_stick_tips.jpg",
                name: '20" Celebrity Choice® Stick Tips',
                description: `
                      <ul>
                        <small>
                          <li>Length 20"</li>
                          <li>50g per pack</li>
                          <li>0.8g per bond</li>
                        </small>
                      </ul>`,
                URL: "20-celebrity-choicer-stick-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccst20",
              },
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-stick-tips/24_inch_stick_tips.jpg",
                name: '24" Celebrity Choice® Stick Tips',
                description: `
                      <ul>
                        <small>
                          <li>Length 24"</li>
                          <li>50g per pack</li>
                          <li>1g per bond</li>
                        </small>
                      </ul>
                      `,
                URL: "24-celebrity-choicer-stick-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccst24",
              },
            ],
          },
          {
            image:
              "professional_extensions/micro-ring-extensions/Beauty-Work-Professional-Micro-Ring-Extensions-Celebrity-Choice-Nano-Bond.jpg",
            name: "Celebrity Choice® Nano Bond",
            description: `
            <ul>
                <small>
                    <li>50g per packet</li>
                    <li>100% Remy human hair</li>
                    <li>Lengths 18”, 20” & 24”</li>
                </small>
            </ul>`,
            URL: "professional-extensions/micro-ring-extensions/nano-bond.html",
            col: "col-md-4 col-xs-12",
            id: "ccNanoBond",
            lengths: [
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-nano-bond/Beauty_Works_Luxury_Hair_Extensions_Professional_18__Nano_Bond1.jpg",
                name: '18" Celebrity Choice® Nano Bond',
                description: `
              <ul>
                <small>
                  <li>Length 18”</li>
                  <li>50g per pack</li>
                  <li>0.8g per bond</li>
                </small>
              </ul>`,
                URL: "18-celebrity-choicer-nano-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccnb18",
              },
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-nano-bond/Beauty_Works_Luxury_Hair_Extensions_Professional_20__Nano_Bond.jpg",
                name: '20" Celebrity Choice® Nano Bond',
                description: `
                <ul>
                  <small>
                    <li>20” Length</li>
                    <li>50g per pack</li>
                    <li>0.8g per bond</li>
                  </small>
                </ul>`,
                URL: "20-celebrity-choicer-nano-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccnb20",
              },
              {
                image:
                  "professional_extensions/micro-ring-extensions/celebrity-choice-nano-bond/Beauty_Works_Luxury_Hair_Extensions_Professional_24__Nano_Bond.jpg",
                name: '24" Celebrity Choice® Nano Bond',
                description: `
                <ul>
                  <small>
                    <li>24” Length</li>
                    <li>50g per pack</li>
                    <li>1g per bond</li>
                  </small>
                </ul>`,
                URL: "24-celebrity-choicer-nano-tip-bond.html",
                col: "col-md-4 col-xs-12",
                id: "ccnb24",
              },
            ],
          },
          {
            image:
              "professional_extensions/micro-ring-extensions/Beauty-Work-Professional-Micro-Ring-Extension-Application-Tools.jpg",
            name: "Professional Micro Ring Tools",
            description: `
            <ul>
                <small>
                    <li>Nano Micro Ring</li>
                    <li>Copper Micro Ring</li>
                    <li>Aluminium Micro Ring</li>
                </small>
            </ul>`,
            URL: "professional-extensions/micro-ring-extensions/professional-tape-micro-ring-tools.html",
            col: "col-md-4 col-xs-12",
            id: "microRingTools",
          },
        ],
      },
      {
        image:
          "professional_extensions/beauty_works_professional_extensions_pre_bonded_extensions.png",
        name: "Pre-Bonded Extensions",
        description: `
            <ul>
                <small>
                    <li>Celebrity Choice® Flat Tips</li>
                </small>
            </ul>`,
        URL: "professional-extensions/pre-bonded-extensions.html",
        col: "col-lg-3 col-md-6 col-xs-12",
        id: "preBonded",
        lengths: [
          {
            image: "professional_extensions/celebrity-choice-flat-tips.jpg",
            name: `18" Celebrity Choice® Flat Tips`,
            description: `
            <ul>
                <small>
                    <li>50g per pack</li>
                    <li>1g per bond</li>
                    <li>100% Remy Human Hair</li>
                    <li>Double Drawn</li>
                </small>
            </ul>`,
            URL: "18-celebrity-choicer-flat-tips.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "18ccft",
          },
          {
            image: "professional_extensions/celebrity-choice-flat-tips.jpg",
            name: `20" Celebrity Choice® Flat Tips`,
            description: `
            <ul>
                <small>
                    <li>50g per pack</li>
                    <li>1g per bond</li>
                    <li>100% Remy Human Hair</li>
                    <li>Double Drawn</li>
                </small>
            </ul>`,
            URL: "20-celebrity-choicer-flat-tips.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "20ccft",
          },
          {
            image: "professional_extensions/celebrity-choice-flat-tips.jpg",
            name: `24" Celebrity Choice® Flat Tips`,
            description: `
            <ul>
                <small>
                    <li>50g per pack</li>
                    <li>1g per bond</li>
                    <li>100% Remy Human Hair</li>
                    <li>Double Drawn</li>
                </small>
            </ul>`,
            URL: "24-celebrity-choicer-flat-tips.html",
            col: "col-lg-3 col-md-4 col-xs-12",
            id: "24ccft",
          },
        ],
      },
    ],
  },
];

// CLIP-INS
const clip_in_extensions = categories[0]["clip-in-hair-extensions"];
const double_hair_set = clip_in_extensions[0].lengths;
const deluxe_clip_ins = clip_in_extensions[1].lengths;
const clip_in_ponytails = clip_in_extensions[2].lengths;
const beach_waves = clip_in_extensions[3].lengths;
const half_weft = clip_in_extensions[4].lengths;

// PROFESSIONAL EXTENSIONS
const professional_extensions = categories[1]["professional-extensions"];
const tape_extensions = professional_extensions[0].lengths;
const invisi_tape = tape_extensions[0].lengths;
// const invisi_tape_subcats = invisi_tape.lengths;
const slim_line_tape = tape_extensions[1].lengths;
// const slim_line_tape_subcats = slim_line_tape.lengths;
const tape_tools = tape_extensions[2].lengths;
const weft_extensions = professional_extensions[1].lengths;
const celebrity_choice_weft = weft_extensions[0].lengths;
// const celebrity_choice_subcats = celebrity_choice_weft.lengths;
const gold_double_weft = weft_extensions[1].lengths;
// const gold_double_weft_subcats = gold_double_weft.lengths;
const invisi_weft = weft_extensions[2].lengths;
const weft_tools = weft_extensions[3].lengths;
const micro_ring_extensions = professional_extensions[2].lengths;
const celebrity_choice_stick_tip = micro_ring_extensions[0].lengths;
// const stick_tip_subcats = celebrity_choice_stick_tip.lengths;
const celebrity_choice_nano_bond = micro_ring_extensions[1].lengths;
// const nano_bond_subcats = celebrity_choice_nano_bond.lengths;
const micro_ring_tools = micro_ring_extensions[2].lengths;
const pre_bonded_extensions = professional_extensions[3].lengths;
// const pre_bonded_subcats = pre_bonded_extensions.lengths;
