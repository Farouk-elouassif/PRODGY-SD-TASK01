document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  
  let kelvin, celsius, fahrenheit;
  const temperature = parseFloat(document.getElementById("temperature").value);
  const scales = document.getElementById("scales").value;
  let result = '';

  if (scales === "Fahrenheit") {
    kelvin = ((temperature - 32) * (5/9)) + 273.15;
    celsius = (temperature - 32) * (5/9);
    result = `
      ${temperature}°F in Kelvin is: ${kelvin.toFixed(2)} K<br>
      ${temperature}°F in Celsius is: ${celsius.toFixed(2)} °C
    `;
  }else if(scales === "Celsius"){
    kelvin = temperature + 273.15
    fahrenheit = (temperature * (9/5)) + 32;
    result = `
      ${temperature}°C in Kelvin is: ${kelvin.toFixed(2)} K<br>
      ${temperature}°C in fahrenheit is: ${fahrenheit.toFixed(2)} °F
    `;
  }else {
    celsius = temperature - 273.15;
    fahrenheit = ((temperature - 273.5) * (9/5)) + 32
    result = `
      ${temperature}K in Celsuis is: ${celsius.toFixed(2)}°C<br>
      ${temperature}K in fahrenheit is: ${fahrenheit.toFixed(2)} °F
    `;
  }
  
  document.getElementById("result").innerHTML = result;
});
