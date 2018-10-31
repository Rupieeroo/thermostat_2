function Thermostat() {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.MAXIMUM_TEMP = 32;
    this.MAXIMUM_TEMP_POWER_SAVING = 25;
    this._temperature = this.DEFAULT_TEMP;
    this.isPowerSaving = true;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  this._temperature += number;
  this._maximumTemp();
};

Thermostat.prototype.down = function(number) {
  this._temperature -= number;
  this._minimumTemp();
};

Thermostat.prototype._minimumTemp = function() {
  if (this._temperature < this.MINIMUM_TEMP) {
    this._temperature = this.MINIMUM_TEMP;
  }
};

Thermostat.prototype._maximumTemp = function() {
  if (this.isPowerSaving === true && this._temperature > this.MAXIMUM_TEMP_POWER_SAVING) {
    this._temperature = this.MAXIMUM_TEMP_POWER_SAVING;
  } else if (this.isPowerSaving === false && this._temperature > this.MAXIMUM_TEMP) {
    this._temperature = this.MAXIMUM_TEMP;
  }
};

Thermostat.prototype.powerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature < 25 ) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
