$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.

    var markup = 
    "The weather report at location (" + data.latitude + "," + data.longitude + ") is as follows:" +
    "<br><br>" +
    "It is currently "+data.currently.summary+" with a temperature of "+ data.currently.temperature +" degrees Fahrenheit and a "+ data.currently.precipProbability*100+"% chance of rain." +
    "<br><br><br>" +
    "The 3-day forecast is as follows:" + 
    "<br><br>" +
    "Tomorrow: " + data.daily.data[0].summary + " Temperature will reach a high of " + data.daily.data[0].temperatureMax + " F and a low of " + data.daily.data[0].temperatureMin + " F. There will be a " + data.daily.data[0].precipProbability*100 + "% chance of rain." +
    "<br><br>" +
    "Two Days: " + data.daily.data[1].summary + " Temperature will reach a high of " + data.daily.data[1].temperatureMax + " F and a low of " + data.daily.data[1].temperatureMin + " F. There will be a " + data.daily.data[1].precipProbability*100 + "% chance of rain." +
    "<br><br>" +
    "Three Days: " + data.daily.data[2].summary + " Temperature will reach a high of " + data.daily.data[2].temperatureMax + " F and a low of " + data.daily.data[2].temperatureMin + " F. There will be a " + data.daily.data[2].precipProbability*100 + "% chance of rain." 
   ;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});