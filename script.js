const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value');
const priceValue = document.querySelector('.price-value');


if(slider.value === "0") {
    pageViewValue.textContent = '10k';
    priceValue.textContent = '8';
}

if(slider.value === "25") {
    pageViewValue.textContent = '50k';
    priceValue.textContent = '12';
}

if(slider.value === "50") {
    pageViewValue.textContent = '100k';
    priceValue.textContent = '16';
}

if(slider.value === "75") {
    pageViewValue.textContent = '500k';
    priceValue.textContent = '24';
}

if(slider.value === "100") {
    pageViewValue.textContent = '1m';
    priceValue.textContent = '32';
}




slider.oninput = function () {
    if(slider.value === "0") {
        pageViewValue.textContent = '10k';
        priceValue.textContent = '8';
    }
    
    if(slider.value === "25") {
        pageViewValue.textContent = '50k';
        priceValue.textContent = '12';
    }
    
    if(slider.value === "50") {
        pageViewValue.textContent = '100k';
        priceValue.textContent = '16';
    }
    
    if(slider.value === "75") {
        pageViewValue.textContent = '500k';
        priceValue.textContent = '24';
    }
    
    if(slider.value === "100") {
        pageViewValue.textContent = '1m';
        priceValue.textContent = '32';
    }
}

