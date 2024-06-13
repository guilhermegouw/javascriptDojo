import { expect } from 'chai';
import { getPlaylist } from '../songPlaylist/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getPlaylist', () => {
    it('Button 4 pressed once.', () => {
      expect(getPlaylist(['41'])).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
    });

    it('Button 1 pressed once.', () => {
      expect(getPlaylist(['11', '41'])).to.deep.equal([
        'B',
        'C',
        'D',
        'E',
        'A',
      ]);
    });

    it('Button 2 pressed once.', () => {
      expect(getPlaylist(['21', '41'])).to.deep.equal([
        'E',
        'A',
        'B',
        'C',
        'D',
      ]);
    });

    it('Button 3 pressed once.', () => {
      expect(getPlaylist(['31', '41'])).to.deep.equal([
        'B',
        'A',
        'C',
        'D',
        'E',
      ]);
    });

    it('Button 1 pressed twice.', () => {
      expect(getPlaylist(['12', '41'])).to.deep.equal([
        'C',
        'D',
        'E',
        'A',
        'B',
      ]);
    });
  });
});
