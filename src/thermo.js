'use strict';

class Thermostat{

  constructor() {
    this.startTemp = 20;
  }

  startTemp() {
    return this.startTemp;
  }

  upTemp(number) {
    // this.temperature += 1 
  return this.startTemp += number; 

  }

  downTemp(number) {
    return this.startTemp -= number;
  }

};