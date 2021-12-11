const expireListing = (e, d) => {
  const render = (expirationDate) => {
    const dateNow = new Date();
    if (dateNow > expirationDate) {
      clearInterval(counter);
      return true;
    }
    return false;
  };

  const counter = setInterval(() => {
    const expired = render(d);
    if (expired) {
      e.style.display = "none";
    }
  }, 1000);
};
