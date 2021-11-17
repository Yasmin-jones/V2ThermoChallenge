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
    expect(thermostat.upTemp(2)).toEqual(22); 

  }); 

  it('Temp can decrease', () => {
    expect(thermostat.downTemp(2)).toEqual(18); 

  }); 

});