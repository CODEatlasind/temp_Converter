function tempConversion(temp,sInTemp,sOutTemp){
    // return celsiusToFahrenheit(temp);
    temp=parseInt(temp);
    sInTemp=parseInt(sInTemp);
    sOutTemp=parseInt(sOutTemp);
    // console.log(sOutTemp)
    // return -1;
    if(sInTemp==0 && sOutTemp==1){
        return celsiusToFahrenheit(temp);
    }
    if(sInTemp==0 && sOutTemp==2){
        return celsiusToKelvin(temp);
    }
    if(sInTemp==1 && sOutTemp==0){
        return fahrenheitToCelsius(temp);
    }
    if(sInTemp==2 && sOutTemp==0){
        return kelvinToCelsius(temp);
    }
    if(sInTemp==1 && sOutTemp==2){
        return fahrenheitToKelvin(temp);
    }
    if(sInTemp==2 && sOutTemp==1){
        return kelvinToFahrenheit(temp);
    }
    
        return temp;
    
}


// fahrenheit, Celsius
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Kelvin, Celsius
// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// fahrenheit, Kelvin
// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    // Convert Fahrenheit to Celsius first, then to Kelvin
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}
// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    // Convert Kelvin to Celsius first, then to Fahrenheit
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
}
