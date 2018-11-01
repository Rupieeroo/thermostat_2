$(document).ready(function() {
  var thermostat = new Thermostat;
            $("#temperature-up").click(function() {
              thermostat.up(1);
              updateTemperature();
            })

            $("#temperature-down").click(function() {
              thermostat.down(1);
              updateTemperature();
            })

            $("#temperature-reset").click(function() {
              thermostat.reset();
              updateTemperature();
            })

            $("#powersaving-on").click(function() {
              thermostat.powerSaving();
              if (thermostat.isPowerSaving === true) {
              $('#power-saving-status').text('on')
              updateTemperature();
              }
            })

            $("#powersaving-off").click(function() {
              thermostat.powerSaving();
              if (thermostat.isPowerSaving === false) {
              $('#power-saving-status').text('off');
              updateTemperature();
              }
            })

            displayWeather('London');

            $('#select-city').submit(function(event) {
              event.preventDefault();
              var city = $('#current-city').val();
              displayWeather(city);
            })

            function displayWeather(city) {
              var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
              var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
              var units = '&units=metric';
              $.get(url + token + units, function(data) {
                $('#current-temperature').text(data.main.temp);
              })
            }

           function updateTemperature() {
             $('#temperature').text(thermostat.temperature());
             $('#temperature').attr('class', thermostat.energyUsage());
           }
});
