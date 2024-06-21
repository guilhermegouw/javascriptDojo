import { expect } from 'chai';
import { needMoreMoney } from '../schoolTrip/challenge.mjs';

describe('Challenge Functions', () => {
  describe('needMoreMoney', () => {
    it('Minimun cost, 4 grades same proportion, minimun students brunch.', () => {
      expect(needMoreMoney(50, [0.25, 0.25, 0.25, 0.25], 4)).to.equal('YES');
    });
  });

  describe('needMoreMoney', () => {
    it('Minimun cost, 4 grades same proportion, minimun students brunch to pay the trip.', () => {
      expect(needMoreMoney(50, [0.25, 0.25, 0.25, 0.25], 12)).to.equal('NO');
    });
  });
});

/*
CASE 1.
  Input: 50, [0.25, 0.25, 0.25, 0.25], 4
  tripCost = 50
  moneyNeeded = 100 => tripCost * 2 (50% for brunch 50% for trip) 
  fisrtYears = 1 => 4 * 0.25 => 12
  secondYears = 1 => 4 * 0.25 => 10
  thirdYears = 1 => 4 * 0.25 => 7
  fourthYears = 1 => 4 * 0.25 => 5
  totalRaised = 34 => 12 + 10 + 7 + 5 => 34 < 100 (moneyNeeded > totalRaised)
  Output: 'YES'

CASE 2.
  Input: 50, [0.25, 0.25, 0.25, 0.25], 12
  tripCost = 50
  moneyNeeded = 100 => tripCost * 2 (50% for brunch 50% for trip) 
  fisrtYears = 3 => 12 * 0.25 => 36
  secondYears = 3 => 12 * 0.25 => 30
  thirdYears = 3 => 12 * 0.25 => 21
  fourthYears = 3 => 12 * 0.25 => 15
  totalRaised = 102 => 36 + 30 + 21 + 15 => 102 > 100 (moneyNeeded < totalRaised)
  Output: 'NO'
**/
