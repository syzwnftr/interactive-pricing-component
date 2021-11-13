const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value');
const priceValue = document.querySelector('.price-value');

let num = 1;

pageViewValue.textContent = slider.value;
priceValue.textContent = Math.round((parseInt(slider.value, 10) + num)).toFixed(2); 

slider.oninput = function () {
    pageViewValue.textContent = this.value;
    priceValue.textContent = Math.round((parseInt(slider.value, 10) + num)).toFixed(2);
}

