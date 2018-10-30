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
  });

});
