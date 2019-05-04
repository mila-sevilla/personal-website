function arrayFrom(selector) {
  Array.prototype.slice.call(document.querySelectorAll(selector))
}

const slides = arrayFrom('.slide')