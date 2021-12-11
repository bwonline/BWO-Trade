const generateMapEmbed = (arr) => {
  return arr.map(({ id, location, gMapEmbed, gMapURL, address }) => {
    return `
        <div class="col-lg-4 col-xs-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title facility-title" id="${id}">Training Head Office - ${location}</h5>
              <iframe src="${gMapEmbed}" width="100%" height="250" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" loading="lazy" tabindex="0"></iframe>
              <a href="${gMapURL}" class="facility-address" title="Beauty Works Professional Training Office - ${location}" target="_blank" >${address}</a>
            </div>
          </div>
        </div>
      `;
  });
};

let locations = [
  {
    id: "manchesterFacility",
    location: "Manchester",
    gMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.315435115837!2d-2.208048284161195!3d53.355509479980974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d26e7661a1b%3A0xa43a3ac1c70cd924!2sOak%20Green%20House%2C%20Handforth%2C%20Cheadle!5e0!3m2!1sen!2suk!4v1615805067173!5m2!1sen!2suk",
    gMapURL: "https://goo.gl/maps/98wmXBUsNupgGv2T7",
    address:
      "Unit 12 Oak Green, Stanley Green Business Park, Cheadle, SK8 6QL, UK",
  },
  {
    id: "londonFacility",
    location: "London",
    gMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7909087507915!2d-0.159987284074698!3d51.51705191781826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acc8f856347%3A0x68a85031122d6867!2sGeorge%20St%2C%20London%20W1H!5e0!3m2!1sen!2suk!4v1596730298952!5m2!1sen!2suk",
    gMapURL: "https://goo.gl/maps/uzievQoMq581WdJ28",
    address: "George Street, Marylebone, London, W1H 8AQ, UK",
  },
  {
    id: "dundeeFacility",
    location: "Dundee",
    gMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.5678642729176!2d-2.976876483932707!3d56.45797754485053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865cbf9af256cf%3A0x98656d35208dae7b!2sCharlie%20Taylor%20Hair%20%26%20Beauty!5e0!3m2!1sen!2suk!4v1629811936218!5m2!1sen!2suk",
    gMapURL: "https://goo.gl/maps/uzievQoMq581WdJ28",
    address: "Charlie Taylor Salon, 95 - 101 Nethergate, Dundee, DD1 4DH",
  },
];

render(generateMapEmbed(locations), "education_Locations");
