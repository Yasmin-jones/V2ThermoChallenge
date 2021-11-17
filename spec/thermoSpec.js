describe("Thermostat", function() {

  'use strict';

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', () => {
    expect(thermostat.startTemp).toEqual(20);
  });

  it('Temp can increase', () => {
    expect(thermostat.upTemp()).toEqual(21); 

  }); 

  it('Temp can decrease', () => {
    thermostat.downTemp();
    expect(thermostat.currentTemp()).toEqual(19); 
  }); 

  it('Has a minimum temp of 10', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.downTemp();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

});