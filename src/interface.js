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

           function updateTemperature() {
             $('#temperature').text(thermostat.temperature());
             $('#temperature').attr('class', thermostat.energyUsage());
           }
});
