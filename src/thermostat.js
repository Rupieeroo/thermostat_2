const defaultTemp = 20;
const minimumTemp = 10;
const maximumTemp = 32;
const maximumTempPowerSaving = 25;

function Thermostat() {
    this._temperature = defaultTemp;
    this.isPowerSaving = true;
};

Thermostat.prototype.reset = function() {
  this._temperature = defaultTemp;
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
  if (this._temperature < minimumTemp) {
    this._temperature = minimumTemp;
  }
};

Thermostat.prototype._maximumTemp = function() {
  if (this.isPowerSaving === true && this._temperature > maximumTempPowerSaving) {
    this._temperature = maximumTempPowerSaving;
  } else if (this.isPowerSaving === false && this._temperature > maximumTemp) {
    this._temperature = maximumTemp;
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
