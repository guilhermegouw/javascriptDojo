import { expect } from 'chai';
import { getBothDaysOccupiedSpaces } from '../occupiedSpaces/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getBothDaysOccupiedSpaces', () => {
    it('1 space, not occupied on both days.', () => {
      expect(getBothDaysOccupiedSpaces(1, '.', '.')).to.equal(0);
    });
    it('1 space, occupied yesterday not occupied today.', () => {
      expect(getBothDaysOccupiedSpaces(1, 'C', '.')).to.equal(0);
    });
    it('1 space, occupied yesterday and occupied today.', () => {
      expect(getBothDaysOccupiedSpaces(1, 'C', 'C')).to.equal(1);
    });
    it('2 spaces, none occupied on both days.', () => {
      expect(getBothDaysOccupiedSpaces(2, '..', '..')).to.equal(0);
    });
    it('2 spaces, none occupied on both days. (ver.2)', () => {
      expect(getBothDaysOccupiedSpaces(2, 'C.', '.C')).to.equal(0);
    });
    it('2 spaces, one occupied in yesterday.', () => {
      expect(getBothDaysOccupiedSpaces(2, 'C.', 'C.')).to.equal(1);
    });
    it('2 spaces, two occupied in both days.', () => {
      expect(getBothDaysOccupiedSpaces(2, 'CC', 'CC')).to.equal(2);
    });
    it('3 spaces, none occupied in both days.', () => {
      expect(getBothDaysOccupiedSpaces(2, '...', 'CCC')).to.equal(0);
    });
    it('3 spaces, one occupied in both days.', () => {
      expect(getBothDaysOccupiedSpaces(2, '.C.', 'CCC')).to.equal(1);
    });
  });
});
