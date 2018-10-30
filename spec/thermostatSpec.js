describe("thermostat", function() {

  var thermostat = new Thermostat

  describe("temperature", function() {
    it('starts at 20oC', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('increases the temperature', function() {
      thermostat.up(5);
      expect(thermostat.temperature()).toEqual(25);
    });
  });
});
