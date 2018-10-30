describe("thermostat", function() {

  var thermostat = new Thermostat

  describe("temperature", function () {
    it('starts at 20oC', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

});
