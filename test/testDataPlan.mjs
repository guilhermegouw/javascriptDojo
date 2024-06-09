import { expect } from 'chai';
import { getMegabytesAvailable } from '../dataPlan/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getMegabytesAvailable', () => {
    it('One month, no data used.', () => {
      expect(getMegabytesAvailable(10, 1, [0])).to.equal(20);
    });
    it('One month, some data used.', () => {
      expect(getMegabytesAvailable(10, 1, [5])).to.equal(15);
    });
    it('One month, all data used.', () => {
      expect(getMegabytesAvailable(10, 1, [10])).to.equal(10);
    });
    it('Two months, no data used.', () => {
      expect(getMegabytesAvailable(10, 2, [0, 0])).to.equal(30);
    });
    it('Two months, some data used on both months.', () => {
      expect(getMegabytesAvailable(10, 2, [5, 6])).to.equal(19);
    });
    it('Two months, all data used on both months.', () => {
      expect(getMegabytesAvailable(10, 2, [10, 10])).to.equal(10);
    });
    it('Three months, no data used on each month.', () => {
      expect(getMegabytesAvailable(10, 3, [0, 0, 0])).to.equal(40);
    });
    it('Three months, some data used on each month.', () => {
      expect(getMegabytesAvailable(10, 3, [5, 6, 7])).to.equal(22);
    });
    it('Three months, all data used on each month.', () => {
      expect(getMegabytesAvailable(10, 3, [10, 10, 10])).to.equal(10);
    });
  });
});
