/*
The Challenge

- Martha goes to a casino and brings n quarters.
- The casino has three slot machines, and she plays them in order until she has
no quarters left.
That is:
- First slot machine, then the second, then the third,
then back to the ﬁrst, then the second, and so on.
- Each play costs one quarter.
- The slot machines operate according to the following rules:
    - The ﬁrst slot machine pays 30 quarters every 35th time it is played.
    - The second slot machine pays 60 quarters every 100th time it is played.
    - The third slot machine pays 9 quarters every 10th time it is played.
    - No other plays pay anything.

Determine the number of times Martha plays before she has no quarters left.

Input

The input consists of four parameters.

- The ﬁrst parameter contains an integer n, the number of quarters that Martha
brings to the casino.
- The second parameter contains an integer indicating the number of times
that the ﬁrst slot machine has been played since it last paid.
obs: These plays occurred prior to Martha arriving, and Martha’s plays continue
from there.

For example:
Suppose that the ﬁrst slot machine has been played 34 times since it last paid.
Then, Martha will win 30 quarters the ﬁrst time she plays it.

- The third parameter contains an integer indicating the number of times that 
the second slot machine has been played since it last paid.
- The fourth parameter contains an integer indicating the number of times that
the third slot machine has been played since it last paid.

Output

Output the following sentence, where x is the number of times Martha plays 
before she has no quarters left:

Martha plays x times before going broke.
**/
export function getNumberOfPlays(quarters, first, second, third) {
  let marthaPlays = 0;
  let currentMachine = 'first';

  while (quarters > 0) {
    marthaPlays++;
    quarters -= 1;

    if (currentMachine === 'first') {
      first += 1;
      if (first === 35) {
        quarters += 30;
        first = 0;
      }
      currentMachine = 'second';
    } else if (currentMachine === 'second') {
      second += 1;
      if (second === 100) {
        quarters += 60;
        second = 0;
      }
      currentMachine = 'third';
    } else if (currentMachine === 'third') {
      third += 1;
      if (third === 10) {
        quarters += 9;
        third = 0;
      }
      currentMachine = 'first';
    }
  }
  return marthaPlays;
}
