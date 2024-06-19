/*
The Challenge

There are n villages located at distinct points on a straight road.
Each village is represented by an integer that indicates its position on the 
road.
- A village’s left neighbor is the village with the next smallest position.
- A village’s right neighbor is the village with the next biggest position.

The neighborhood of a village consists of half the space between that village
and its left neighbor, plus half the space between that village and its
right neighbor.
For example:
- If there’s a village at position 10
- with its left neighbor at position 6
- and its right neighbor at position 15
Then this village’s neighborhood starts from position 8 (halfway between 6 and
10) and ends at position 12.5 (halfway between 10 and 15).
- The leftmost and rightmost villages have only one neighbor, so the deﬁnition
of a neighborhood doesn’t make sense for them.
We’ll ignore the neighborhoods of those two villages in this problem.

The size of a neighborhood is calculated as the neighborhood’s:

neighborhood = rightmost position - the neighborhood’s leftmost position.

For example:
the neighborhood that goes from 8 to 12.5 has size 12.5 – 8 = 4.5.

Determine the size of the smallest neighborhood.

Input

The input consists of the following parameters:
- the number of villages.
- Each of which gives the position of a village.
  obs: The positions need not come in order from left to right; the neighbor of a
village could be anywhere in these lines.

Output

Output the size of the smallest neighborhood.
Include exactly one digit after the decimal point.
**/
export function getSmallestNeighborhoodSize(n, villages) {
  if (n < 3) return 0;

  let sortedPositions = villages.sort((a, b) => a - b);
  let smallestNeighborhood = Infinity;

  for (let i = 1; i < n - 1; i++) {
    let leftNeighbor = sortedPositions[i - 1];
    let rightNeighbor = sortedPositions[i + 1];
    let leftLimit =
      sortedPositions[i] - (sortedPositions[i] - leftNeighbor) / 2;
    let rightLimit =
      (rightNeighbor - sortedPositions[i]) / 2 + sortedPositions[i];
    let neighborhoodSize = rightLimit - leftLimit;
    if (smallestNeighborhood > neighborhoodSize) {
      smallestNeighborhood = neighborhoodSize;
    }
  }
  return smallestNeighborhood;
}
