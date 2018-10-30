describe("thermostat", function() {

  var thermostat = new Thermostat

  describe("temperature", function() {
    it('starts at 20oC', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('increases the temperature from 20 to 25', function() {
      thermostat.up(5);
      expect(thermostat.temperature()).toEqual(25);
    });

    it('decreases the temperature from 25 to 20', function() {
      thermostat.down(5);
      expect(thermostat.temperature()).toEqual(20);
    });

    it('does not fall below 10oC', function() {
      thermostat.down(15);
      expect(thermostat.temperature()).toEqual(10);
    });
  });

  describe("Power save", function() {
    it('Sets maximum temperature to 25oC when powersave is on', function() {
      thermostat.powerSaving();
      thermostat.up(20);
      expect(thermostat.temperature()).toEqual(25);
    });

    it('Sets a maximum temperature to 32oC when powersave is off', function() {
      thermostat.powerSaving();
      thermostat.up(10);
      expect(thermostat.temperature()).toEqual(32);
    });
  });

});
