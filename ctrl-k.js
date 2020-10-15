// Julius base64 image

var showAlert = function() {
  var root = document.createElement('div');
  root.innerHTML = "<div " +
    "id='julius-guardian-modal' style='display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; text-align: center; position: fixed; background: rgba(0, 0, 0, 0.6); top: 0; left: 0; z-index: 99999;'>" +
    "<img style='border: 2px solid #ffffff;' src='" + imageData + "' alt='' />" +
    "</div>";

  document.body.appendChild(root);
};

var regex = /Comprar|Buy|Add to cart|Adicionar ao carrinho/gmi

document.querySelectorAll('a, button, input[type="submit"]').forEach(function(el) {
  el.onclick = function(e) {
    var text = e.target.innerText || e.target.value;

    if (text.match(regex)) {
      showAlert();

      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }
});
