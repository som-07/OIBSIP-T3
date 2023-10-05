const celciusField = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celciusField.innerHTML = "";
})

convertBtn.addEventListener("click", (c) =>{
    c.preventDefault();
    convertToCelcius();

    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>convert</span>";
    }, 1000)
})
function convertToCelcius() {
    let inputvalue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit") {
            const fahrenheitToCelcius = (inputvalue -32)* (5/9);
            celciusField.innerHTML = `${fahrenheitToCelcius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value === "kelvin") {
            const kelvinToCelcius = inputvalue -273.15;
            celciusField.innerHTML = `${kelvinToCelcius.toFixed(3)} &deg; c`;
        }
    }, 1100)
}