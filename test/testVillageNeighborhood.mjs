import { expect } from 'chai';
import { getSmallestNeighborhoodSize } from '../villageNeighborhood/challenge.mjs';

describe('Challenge Fucntions', () => {
  describe('getSmallestNeighborhoodSize', () => {
    it('Three villages', () => {
      expect(getSmallestNeighborhoodSize(3, [3, 2, 1])).to.equal(1.0);
    });
  });

  describe('getSmallestNeighborhoodSize', () => {
    it('Four villages', () => {
      expect(getSmallestNeighborhoodSize(4, [6, 10, 3, 1])).to.equal(2.5);
    });
  });

  describe('getSmallestNeighborhoodSize', () => {
    it('Five villages', () => {
      expect(getSmallestNeighborhoodSize(5, [1, 6, 10, 13, 15])).to.equal(2.5);
    });
  });
});

/*
LIMITS
6---10----15
10 - 6 = 4 => 4/2 = 2 => 10 - 2 = 8 (starts at 8)
15 - 10 = 5 => 5/2 = 2.5 => 10 + 2.5 = 12.5 (ends at 12.5)

SIZE

- The leftmost and rightmost villages have only one neighbor, so the deﬁnition
of a neighborhood doesn’t make sense for them.

12.5 - 8 = 4.5

The smallest neighborhood is 4.5.


LIMITS
1-(3)--6---10
left = 3 - 1 = 2 => 2/2 = 1 => 3 - 1 = 2 (starts at 2)
right = 6 - 3 = 3 => 3/2 = 1.5 => 3 + 1.5 = 4.5 (ends at 4.5)

1-3--(6)---10
left = 6 - 3 = 3 => 3/2 = 1.5 => 6 - 1.5 = 4.5 (starts at 4.5)
right = 10 - 6 = 4 => 4/2 = 2 => 6 + 2 = 8 (ends at 8)

SIZE

- The leftmost and rightmost villages have only one neighbor, so the deﬁnition
of a neighborhood doesn’t make sense for them.

4.5 - 2 = 2.5
8 - 4.5 = 3.5

The smallest neighborhood is 2.5.
**/
