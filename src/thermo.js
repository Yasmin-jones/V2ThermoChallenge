'use strict';

class Thermostat{

  constructor() {
    this.MIN_TEMP = 10;
    this.startTemp = 20;
    this.powerSavingMode = true; 
    
  }

  isMinimumTemperature() {
    return this.startTemp === this.MIN_TEMP;
  }

  currentTemp() {
    return this.startTemp;
  }

  upTemp() {
    // this.temperature += 1 
  return this.startTemp += 1; 

  }

  downTemp() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.startTemp -= 1;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  turnOffPSM() {
    return this.powerSavingModeOn = false;
  }
  
  turnOnPSM() {
    return this.powerSavingModeOn = true; 

  }

 


};