const urlKey = {
  "dev-element": "DEV",
  "ultimate-tape-extension-course": "UTEC",
  "creative-mix-1-course": "CM1C",
  "creative-mix-2-course": "CM2C",
  "creative-mix-3-course": "CM3C",
};

const courses = {
  DEV: {
    title: "Dev",
    url: "dev-element",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut at molestiae placeat ipsum minus quam obcaecati omnis eius ea autem ad distinctio numquam, nesciunt est, eum reprehenderit. Dolore, illo!",
    price: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/Ultimate_Tape_Extension_Courses2.jpg",
  },
  UTEC: {
    title: "The Ultimate Tape Course",
    url: "ultimate-tape-extension-course",
    description:
      "Super fast extensions for clients and salons on the go. This revolutionary system allows users to add extensions in minutes, meaning you create full fringes, layers and a full head of extensions in under an hour.",
    price:
      "Price for the full day course is £499.99. Reserve your place now, limited spaces available.",
    image:
      "https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/Ultimate_Tape_Extension_Courses2.jpg",
  },
  CM1C: {
    title: "The Creative Mix 1 Course",
    url: "creative-mix-1-course",
    description:
      "Focus on fast application with tape and weft extensions for clients and salons on the go. Learn to fit extensions in just one hour, also discover the benefits of seamless tape in extensions.",
    price:
      "Price for the full day course is £649.99. Reserve your place now, limited spaces available.",
    image:
      "https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/The_Creative_Mix_1_Course2.jpg",
  },
  CM2C: {
    title: "The Creative Mix 2 Course",
    url: "creative-mix-2-course",
    description:
      "Learn how to integrate your clients hair seamlessly with bonded and tape extensions. Discover a wide range of colour with bespoke blonds. Allow your clients to enjoy natural movement, with extensions that flow easily just like your own hair.",
    price:
      "Price for the full day course is £649.99. Reserve your place now, limited spaces available.",
    image:
      "https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/The_Creative_Mix_2_Course2.jpg",
  },
  CM3C: {
    title: "The Creative Mix 3 Course",
    url: "creative-mix-3-course",
    description:
      "Learn how to integrate your client's hair seamlessly with our comprehensive Micro-Ring and Pre-Bonded extensions. Focus on the popular micro ring application methods and bring the very latest Nano Ring system back to your clients. Discover our wide range of colours and how to create bespoke blends for chemical free highlights. Allow clients to enjoy the natural movement with extension strands and wefts that flow and move easily, just like your own hair.",
    price:
      "Price for the full day course is £649.99. Reserve your place now, limited spaces available.",
    image:
      "https://beautyworks.com/media/wysiwyg/TRADE-eventCalender/course-we-offer/Complete_Micro_Ring_Course2.jpg",
  },
};

const facilites = {
  LON: {
    city: "London",
    venue: "Marylebone, London, W1H 8AQ, UK",
    streetAddress: "George Street",
    addressLocality: "Marylebone",
    addressRegion: "London",
    postalCode: "W1H 8AQ",
    addressCountry: "Great Britain",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7909087507915!2d-0.159987284074698!3d51.51705191781826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acc8f856347%3A0x68a85031122d6867!2sGeorge%20St%2C%20London%20W1H!5e0!3m2!1sen!2suk!4v1596730298952!5m2!1sen!2suk"
          width="100%" height="250" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" loading="lazy" tabindex="0"></iframe>`,
    mapURL: "https://goo.gl/maps/uzievQoMq581WdJ28",
  },
  MAN: {
    city: "Manchester",
    venue: "Beauty Works HQ Manchester, UK",
    streetAddress: "Oak Green House",
    addressLocality: "Handforth",
    addressRegion: "Cheadle",
    postalCode: "SK8 6QL",
    addressCountry: "Great Britain",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.315435115837!2d-2.208048284161195!3d53.355509479980974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d26e7661a1b%3A0xa43a3ac1c70cd924!2sOak%20Green%20House%2C%20Handforth%2C%20Cheadle!5e0!3m2!1sen!2suk!4v1615805067173!5m2!1sen!2suk"
          width="100%" height="250" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" loading="lazy" tabindex="0"></iframe>`,
    mapURL: "https://goo.gl/maps/98wmXBUsNupgGv2T7",
  },
  DUN: {
    city: "Dundee",
    venue: "95 - 101 Nethergate, Dundee, DD1 4DH",
    streetAddress: "95 - 101 Nethergate",
    addressLocality: "Dundee",
    addressRegion: "Dundee",
    postalCode: "DD1 4DH",
    addressCountry: "Scotland",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.5678642729176!2d-2.976876483932707!3d56.45797754485053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865cbf9af256cf%3A0x98656d35208dae7b!2sCharlie%20Taylor%20Hair%20%26%20Beauty!5e0!3m2!1sen!2suk!4v1629811936218!5m2!1sen!2suk"
          width="100%" height="250" style="border: 0" allowfullscreen="" loading="lazy"></iframe>`,
    mapURL: "https://goo.gl/maps/Ponkjpjt1bNrXMiX9",
  },
};
