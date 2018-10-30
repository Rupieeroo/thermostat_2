describe("Thermostat", function() {

  var thermostat = new Thermostat

  describe("Temperature", function() {
    it('starts at 20oC', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('increases the temperature from 20oC to 25oC', function() {
      thermostat.up(5);
      expect(thermostat.temperature()).toEqual(25);
    });

    it('decreases the temperature from 25oC to 20oC', function() {
      thermostat.down(5);
      expect(thermostat.temperature()).toEqual(20);
    });

    it('does not fall below 10oC', function() {
      thermostat.down(15);
      expect(thermostat.temperature()).toEqual(10);
    });
  });

  describe("Power saving", function() {
    it('is on by default', function() {
      expect(thermostat["isPowerSaving"]).toBe(true);
    });

    it('sets maximum temperature to 25oC when powersave is on', function() {
      thermostat.up(20);
      expect(thermostat.temperature()).toEqual(25);
    });

    it('sets a maximum temperature to 32oC when powersave is off', function() {
      thermostat.powerSaving();
      thermostat.up(10);
      expect(thermostat.temperature()).toEqual(32);
    });
  });

  describe('Reset', function() {
    it('resets the temperature to 20oC', function() {
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('Current energy usage', function() {
    it('displays low-usage when temperature is less than 18oC', function() {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('displays medium-usage when temperature is less than 18oC', function() {
      thermostat.reset();
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('displays high-usage when temperature is less than 18oC', function() {
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });


});
