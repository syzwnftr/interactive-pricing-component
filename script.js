const slider = document.querySelector('.slider');
const pageViewValue = document.querySelector('.pageviews-value');
const priceValue = document.querySelector('.price-value');
const checkBox = document.querySelector('.check')
let percent = document.querySelector('.percent');


if(slider.value === "0") {
    pageViewValue.textContent = '10k';
    priceValue.textContent = '8.00';
}

if(slider.value === "25") {
    pageViewValue.textContent = '50k';
    priceValue.textContent = '12.00';
}

if(slider.value === "50") {
    pageViewValue.textContent = '100k';
    priceValue.textContent = '16.00';
}

if(slider.value === "75") {
    pageViewValue.textContent = '500k';
    priceValue.textContent = '24.00';
}

if(slider.value === "100") {
    pageViewValue.textContent = '1m';
    priceValue.textContent = '36.00';
}

function progressColor() {
    let slideValue = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${slideValue}%,  hsl(224, 65%, 95%) ${slideValue}%)`;
}


// slider.oninput = function () {

//     if(slider.value === "0") {
//         pageViewValue.textContent = '10k';
//         priceValue.textContent = '8.00';
//     }
    
//     if(slider.value === "25") {
//         pageViewValue.textContent = '50k';
//         priceValue.textContent = '12.00';
//     }
    
//     if(slider.value === "50") {
//         pageViewValue.textContent = '100k';
//         priceValue.textContent = '16.00';
//     }
    
//     if(slider.value === "75") {
//         pageViewValue.textContent = '500k';
//         priceValue.textContent = '24.00';
//     }
    
//     if(slider.value === "100") {
//         pageViewValue.textContent = '1m';
//         priceValue.textContent = '36.00';
//     }
// }

// function billing () {

//     if(checkBox.checked) {
//         percent.textContent = '-25%'

//         if(slider.value === "0") {
//             pageViewValue.textContent = '10k';
//             priceValue.textContent = '6.00';
//         }
        
//         if(slider.value === "25") {
//             pageViewValue.textContent = '50k';
//             priceValue.textContent = '9.00';
//         }
        
//         if(slider.value === "50") {
//             pageViewValue.textContent = '100k';
//             priceValue.textContent = '12.00';
//         }
        
//         if(slider.value === "75") {
//             pageViewValue.textContent = '500k';
//             priceValue.textContent = '18.00';
//         }
        
//         if(slider.value === "100") {
//             pageViewValue.textContent = '1m';
//             priceValue.textContent = '27.00';
//         }

//         slider.oninput = function () {
//             if(slider.value === "0") {
//                 pageViewValue.textContent = '10k';
//                 priceValue.textContent = '6.00';
//             }
            
//             if(slider.value === "25") {
//                 pageViewValue.textContent = '50k';
//                 priceValue.textContent = '9.00';
//             }
            
//             if(slider.value === "50") {
//                 pageViewValue.textContent = '100k';
//                 priceValue.textContent = '12.00';
//             }
            
//             if(slider.value === "75") {
//                 pageViewValue.textContent = '500k';
//                 priceValue.textContent = '18.00';
//             }
            
//             if(slider.value === "100") {
//                 pageViewValue.textContent = '1m';
//                 priceValue.textContent = '27.00';
//             }
//         }

//     } else {
//         percent.textContent = '-0%'


//         if(slider.value === "0") {
//             pageViewValue.textContent = '10k';
//             priceValue.textContent = '8.00';
//         }
        
//         if(slider.value === "25") {
//             pageViewValue.textContent = '50k';
//             priceValue.textContent = '12.00';
//         }
        
//         if(slider.value === "50") {
//             pageViewValue.textContent = '100k';
//             priceValue.textContent = '16.00';
//         }
        
//         if(slider.value === "75") {
//             pageViewValue.textContent = '500k';
//             priceValue.textContent = '24.00';
//         }
        
//         if(slider.value === "100") {
//             pageViewValue.textContent = '1m';
//             priceValue.textContent = '36.00';
//         }
        
//         slider.oninput = function () {
//             if(slider.value === "0") {
//                 pageViewValue.textContent = '10k';
//                 priceValue.textContent = '8.00';
//             }
            
//             if(slider.value === "25") {
//                 pageViewValue.textContent = '50k';
//                 priceValue.textContent = '12.00';
//             }
            
//             if(slider.value === "50") {
//                 pageViewValue.textContent = '100k';
//                 priceValue.textContent = '16.00';
//             }
            
//             if(slider.value === "75") {
//                 pageViewValue.textContent = '500k';
//                 priceValue.textContent = '24.00';
//             }
            
//             if(slider.value === "100") {
//                 pageViewValue.textContent = '1m';
//                 priceValue.textContent = '36.00';
//             }
//         }
//     } 
// }

// checkBox.addEventListener('click', billing);



