const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value')

// pageViewValue.textContent = slider.value;

slider.oninput = function () {
    pageViewValue.textContent = this.value;
}