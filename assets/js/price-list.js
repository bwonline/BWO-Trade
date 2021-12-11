const priclist = {
  tier1: {
    tierLevel: "Tier 1",
    url: "https://beautyworks.com/media/wysiwyg/Tier_1_Price_List_2021.pdf",
  },
  tier2: {
    tierLevel: "Tier 2",
    url: "https://beautyworks.com/media/wysiwyg/Tier_2_Price_List_2021.pdf",
  },
  tier3: {
    tierLevel: "VIP",
    url: "https://beautyworks.com/media/wysiwyg/VIP_Price_List_2021.pdf",
  },
};

const render = (tier) => {
  innerHTML = `
          <div class="container">
              <img class="hidden-xs bgImg" src="https://beautyworks.com/media/wysiwyg/price-list/Price-List-Image.jpg"
                  alt="Beauty Works ${priclist[tier].tierLevel} Price List" title="Beauty Works ${priclist[tier].tierLevel} Price List" />
              <img class="hidden-sm hidden-md hidden-lg bgImg" src='https://beautyworks.com/media/wysiwyg/price-list/Price-List-mobile.jpg'
                  alt="Beauty Works ${priclist[tier].tierLevel} Price List" title="Beauty Works ${priclist[tier].tierLevel} Price List" />
              <div class="centered">
                  <img class="bwLogo" src='https://beautyworks.com/media/wysiwyg/Beauty-Works-Black_Logo-min.png'
                      alt="Beauty Works" title="Beauty Works" />
                  <h1>${priclist[tier].tierLevel} Price List</h1>
                  <a class="card-btn" title="Beauty Works ${priclist[tier].tierLevel} Price List"
                      target="_blank" href="${priclist[tier].url}">
                          Download Here
                  </a>
              </div>
          </div>
      `;

  return innerHTML;
};

const validTier = (element, key) => {
  return element === null ? `<div></div>` : (element.innerHTML = render(key));
};

validTier(document.getElementById("tier_one"), "tier1");
validTier(document.getElementById("tier_two"), "tier2");
validTier(document.getElementById("tier_vip"), "tier3");
