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

  it('Has power saving mode by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true); 
  });

  it('PSM can be turned off', () => {
    thermostat.turnOffPSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('PSM can be turned on', () => {
    thermostat.turnOffPSM();
    // expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnOnPSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);

  });

  describe('when power saving mode is on', () => {
    it('Has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.upTemp(); 
      }
      expect(thermostat.currentTemp()).toEqual(25); 
    }); 
  })

});