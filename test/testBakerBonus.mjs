import { expect } from 'chai';
import { getBonusesAwarded } from '../bakerBonus/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getBonusesAwarded', () => {
    it('No Bonus', () => {
      expect(
        getBonusesAwarded(4, 2, [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
        ]),
      ).to.equal(0);
    });
  });

  describe('getBonusesAwarded', () => {
    it('With bonus per franchisee and per day.', () => {
      expect(
        getBonusesAwarded(4, 2, [
          [11, 2],
          [3, 4],
          [5, 6],
          [7, 8],
        ]),
      ).to.equal(3);
    });
  });

  describe('getBonusesAwarded', () => {
    it('All Zero Sales', () => {
      expect(
        getBonusesAwarded(4, 2, [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ]),
      ).to.equal(0);
    });
  });

  describe('getBonusesAwarded', () => {
    it('Exact Multiples of 13', () => {
      expect(
        getBonusesAwarded(3, 2, [
          [13, 26],
          [26, 39],
          [39, 52],
        ]),
      ).to.equal(30); // 1+2 for day 1 and 2+3+1 for franchisee totals
    });
  });
});

/*
Bonus Conditions:

- For every day on which the total sales across all franchisees is a multiple of 13, that multiple will be given as bonuses.
- For every franchisee whose total sales across all days is a multiple of 13, that multiple will be given as bonuses.

Case 1:
Day 1: 1 + 3 + 5 + 7 = 16 (16 % 13 !== 0) => 0
Day 2: 2 + 4 + 6 + 8 = 20 (20 % 13 !== 0) => 0

Franchisee 1: 1 + 2 = 3 (3 % 13 !== 0) => 0
Franchisee 2: 3 + 4 = 7 (7 % 13 !== 0) => 0
Franchisee 3: 5 + 6 = 11 (11 % 13 !== 0) => 0
Franchisee 4: 7 + 8 = 15 (15 % 13 !== 0) => 0

Total Bonuses: 0


Case 2:
Day 1: 11 + 3 + 5 + 7 = 26 (26 % 13 !== 0) => 2
Day 2: 2 + 4 + 6 + 8 = 20 (20 % 13 !== 0) => 0

Franchisee 1: 11 + 2 = 13 (13 % 13 !== 0) => 1
Franchisee 2: 3 + 4 = 7 (7 % 13 !== 0) => 0
Franchisee 3: 5 + 6 = 11 (11 % 13 !== 0) => 0
Franchisee 4: 7 + 8 = 15 (15 % 13 !== 0) => 0

Total Bonuses: 3


Case 3 ('Exact Multiples of 13')
Day 1: 13 + 26 + 39 = 78 (78 % 13 === 0) => 6
Day 2: 26 + 39 + 52 = 117 (117 % 13 === 0) => 9

Franchisee 1: 13 + 26 = 39 (39 % 13 === 0) => 3
Franchisee 2: 26 + 39 = 65 (65 % 13 === 0) => 5
Franchisee 3: 39 + 52 = 91 (91 % 13 === 0) => 7
**/
