'use strict';

class Thermostat{

  constructor() {
    this.startTemp = 20;
  }

  startTemp() {
    return this.startTemp;
  }

  increasingTemp(number) {
    // this.temperature += 1 
  return this.startTemp += number; 

  }

};