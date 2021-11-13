const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value');
const priceValue = document.querySelector('.price-value');
let num = 1;

pageViewValue.textContent = slider.value;
priceValue.textContent = parseInt(slider.value, 10) + num; 

slider.oninput = function () {
    pageViewValue.textContent = this.value;
    priceValue.textContent = parseInt(slider.value, 10) + num;
}