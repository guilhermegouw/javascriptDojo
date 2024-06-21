import { expect } from 'chai';
import { getBonusesAwarded } from '../bakerBonus/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getBonusesAwarded', () => {
    it('', () => {
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
});

/*
Case 1:


**/
