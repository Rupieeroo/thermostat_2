function Thermostat() {
    this._temperature = 20;
    this.isPowerSaving = true;
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
  if (this._temperature < 10) {
    this._temperature = 10;
  }
};

Thermostat.prototype._maximumTemp = function() {
  if (this.isPowerSaving === true && this._temperature > 25) {
    this._temperature = 25;
  } else if (this.isPowerSaving === false && this._temperature > 32) {
    this._temperature = 32;
  }
};

Thermostat.prototype.powerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};
