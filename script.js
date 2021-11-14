const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value');
const priceValue = document.querySelector('.price-value');

pageViewValue.textContent = slider.value;
priceValue.textContent = (parseInt(slider.value) / 1.25).toFixed(2);

slider.oninput = function () {
    pageViewValue.textContent = this.value;
    priceValue.textContent = (parseInt(slider.value) / 1.25).toFixed(2);
}

