const render = (arr, node) => {
  if (!node) return;
  let list = document.createElement("ul");
  arr.forEach(function (item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
  });
  let app = document.getElementById(node);
  app.appendChild(list);
};
