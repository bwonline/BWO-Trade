window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  const form = document.getElementById("fs-frm");
  const button = document.getElementById("fs-frm-button");
  const status = document.getElementById("fs-frm-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    form.style = "display: none ";
    button.style = "display: none ";
    status.innerHTML =
      "Thanks for your enquiry, our team will be in touch soon!";
  }

  function error() {
    status.innerHTML =
      "There was a problem, some information is missing from your message";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
