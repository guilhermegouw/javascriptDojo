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

    it('Button 2 pressed twice.', () => {
      expect(getPlaylist(['22', '41'])).to.deep.equal([
        'D',
        'E',
        'A',
        'B',
        'C',
      ]);
    });

    it('Button 3 pressed twice.', () => {
      expect(getPlaylist(['32', '41'])).to.deep.equal([
        'A',
        'B',
        'C',
        'D',
        'E',
      ]);
    });

    it('Buttons 1 and 2 pressed once each.', () => {
      expect(getPlaylist(['11', '21', '41'])).to.deep.equal([
        'A',
        'B',
        'C',
        'D',
        'E',
      ]);
    });

    it('Buttons 2 and 3 pressed once each.', () => {
      expect(getPlaylist(['21', '31', '41'])).to.deep.equal([
        'A',
        'E',
        'B',
        'C',
        'D',
      ]);
    });

    it('Buttons 3 and 1 pressed once each.', () => {
      expect(getPlaylist(['31', '11', '41'])).to.deep.equal([
        'A',
        'C',
        'D',
        'E',
        'B',
      ]);
    });
  });
});
