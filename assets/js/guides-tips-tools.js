const guideCTA = (arr) => {
  return arr.map(({ title, pdf, image }) => {
    return `
            <div class="col-md-4 col-xs-12">
                <div class="card">
                    <a href="https://beautyworks.com/media/customer-benifits/${pdf}" target="_blank" title="${title}" >
                        <img class="card-img-top" src='https://beautyworks.com/media/wysiwyg/customer-benefits/${image}' alt="${title}" title="${title}" />
                    </a>
                    <div class="card-body">
                        <a href="https://beautyworks.com/media/customer-benifits/${pdf}" target="_blank" title="${title}" >
                            <h5 class="card-title">${title}</h5>
                        </a>
                    </div>
                </div>
            </div>
        `;
  });
};

let guides = [
  {
    title: "Benefits & Rewards",
    image: "Benefits-_-Rewards.jpg",
    pdf: "Benefit_Scheme.pdf",
  },
  {
    title: "Education & Training",
    image: "Education-_-Training.jpg",
    pdf: "Education.pdf",
  },
  {
    title: "Marketing Material",
    image: "guides-tips-tools_Marketing-Materials.jpg",
    pdf: "Marketing_Material.pdf",
  },
  {
    title: "Master Extensionist Benefit Scheme",
    image: "guides-tips-tools_Master-Extensionist-Benefit-Scheme.jpg",
    pdf: "Master_Extensionist_Benefit_Scheme.pdf",
  },
  {
    title: "Master Extensionist Marketing Material",
    image: "guides-tips-tools_Master-Extensionist-Marketing-Material.jpg",
    pdf: "ME_Marketing_Material.pdf",
  },
  {
    title: "Social Media Guide",
    image: "guides-tips-tools_Social-Media-Guide.jpg",
    pdf: "Social_Media_Guide.pdf",
  },
  {
    title: "Tips For Success",
    image: "guides-tips-tools_Tips-For-Success.jpg",
    pdf: "Tips_For_Success.pdf",
  },
  {
    title: "VIP Benefit Scheme",
    image: "guides-tips-tools_VIP-Benefit-Scheme.jpg",
    pdf: "VIP_Benefit_Scheme.pdf",
  },
  {
    title: "VIP Marketing Material",
    image: "guides-tips-tools_VIP-Marketing-Material.jpg",
    pdf: "VIP_Marketing_Material.pdf",
  },
];

render(guideCTA(guides), "guide-CTAs");
