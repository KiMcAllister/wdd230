
function calculate(){
    console.log("working");
    const t = 20;
    const s = 10;
    if ( t <= 50 && s > 3){
        document.querySelector(".weather h3").innerHTML = (35.74 + 0.6215*t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16)).toFixed(2);
    }
    else{
        document.querySelector(".weather h3").innerHTML = "N/A, wind speed isnt defined for tempertures above 50 degrees or wind speeds below 3 mph.";
    }
}

calculate();

