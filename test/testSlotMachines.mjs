import { expect } from 'chai';
import { getNumberOfPlays } from '../slotMachines/challenge.mjs';

describe('Challenge Functions', () => {
  describe('getNumberOfPlays', () => {
    it('One quarter, first starts with 0.', () => {
      expect(getNumberOfPlays(1, 0, 0, 0)).to.equal(1);
    });

    it('Two quarters, first starts with 0.', () => {
      expect(getNumberOfPlays(2, 0, 0, 0)).to.equal(2);
    });

    it('One quarter, first starts with 34.', () => {
      expect(getNumberOfPlays(1, 34, 0, 0)).to.equal(40);
    });

    it('Two quarter, second starts with 99.', () => {
      expect(getNumberOfPlays(2, 0, 99, 0)).to.equal(80);
    });

    it('Three quarters, third starts with 9.', () => {
      expect(getNumberOfPlays(3, 0, 0, 9)).to.equal(12);
    });
  });
});

/*
Initial State:

Quarters: 1
First Machine: 34 plays since last payout
Second Machine: 0 plays since last payout
Third Machine: 0 plays since last payout

Each round (passing through all machines) costs 3 quarters.

First round:
- marthaPlays +3 = 3
- First Machine: 35 plays since last payout => 30 quarters and 0 plays since last payout
- Second Machine: 1 plays since last payout
- Third Machine: 1 plays since last payout
- Prize 30
- Remaining quarters: (30 + 1) - 3 = 28

Second round:
- marthaPlays +3 = 6
- First Machine: 1 plays since last payout
- Second Machine: 2 plays since last payout
- Third Machine: 2 plays since last payout
- Prize 0
- Remaining quarters: 28 - 3 = 25

Third round:
- marthaPlays +3 = 9
- First Machine: 2 plays since last payout
- Second Machine: 3 plays since last payout
- Third Machine: 3 plays since last payout
- Remaining quarters: 25 - 3 = 22

Fourth round:
- marthaPlays +3 = 12
- First Machine: 3 plays since last payout
- Second Machine: 4 plays since last payout
- Third Machine: 4 plays since last payout
- Prize 0
- Remaining quarters: 22 - 3 = 19

Fifth round:
- marthaPlays +3 = 15
- First Machine: 4 plays since last payout
- Second Machine: 5 plays since last payout
- Third Machine: 5 plays since last payout
- Prize 0
- Remaining quarters: 19 - 3 = 16

Sixth round:
- marthaPlays +3 = 18
- First Machine: 5 plays since last payout
- Second Machine: 6 plays since last payout
- Third Machine: 6 plays since last payout
- Prize 0
- Remaining quarters: 16 - 3 = 13

Seventh round:
- marthaPlays +3 = 21
- First Machine: 6 plays since last payout
- Second Machine: 7 plays since last payout
- Third Machine: 7 plays since last payout
- Prize 0
- Remaining quarters: 13 - 3 = 10

Eighth round:
- marthaPlays +3 = 24
- First Machine: 7 plays since last payout
- Second Machine: 8 plays since last payout
- Third Machine: 8 plays since last payout
- Prize 0
- Remaining quarters: 10 - 3 = 7

Ninth round:
- marthaPlays +3 = 27
- First Machine: 8 plays since last payout
- Second Machine: 9 plays since last payout
- Third Machine: 9 plays since last payout
- Prize 0
- Remaining quarters: 7 - 3 = 4

Tenth round:
- marthaPlays +3 = 30
- First Machine: 9 plays since last payout
- Second Machine: 10 plays since last payout
- Third Machine: 10 plays since last payout => 9 quarters and 0 plays since last payout
- Prize 9
- Remaining quarters: (4 - 3 ) = 1 => 1 + 9 = 10

Eleventh round:
- marthaPlays +3 = 33
- First Machine: 10 plays since last payout
- Second Machine: 11 plays since last payout
- Third Machine: 1 plays since last payout
- Prize 0
- Remaining quarters: 10 - 3 = 7

Twelfth round:
- marthaPlays +3 = 36
- First Machine: 11 plays since last payout
- Second Machine: 12 plays since last payout
- Third Machine: 2 plays since last payout
- Prize 0
- Remaining quarters: 7 - 3 = 4

Thirteenth round:
- marthaPlays +3 = 39
- First Machine: 12 plays since last payout
- Second Machine: 13 plays since last payout
- Third Machine: 3 plays since last payout
- Prize 0
- Remaining quarters: 4 - 3 = 1

Fourteenth round:
- marthaPlays +1 = 40
- First Machine: 13 plays since last payout
- Second Machine: 13 plays since last payout
- Third Machine: 3 plays since last payout
- Prize 0
- Remaining quarters: 0


Case 2:

2 quarters, first starts with 0, second starts with 99, third starts with 0

First round:
- marthaPlays +3 = 3
- First Machine: 1 plays since last payout
- Second Machine: 100 plays since last payout => 60 quarters and 0 plays since last payout
- Third Machine: 1 plays since last payout
- Prize 60
- Remaining quarters: (60 + 2) - 3 = 59

First machine pays on 35th play
Second machine pays on 100th play
Third machine pays on 10th play

Each round adds 1 play to each machine
The machines state are:
- First Machine: 1 plays since last payout
- Second Machine: 0 plays since last payout
- Third Machine: 1 plays since last payout

The next machine to give a prize is the third machine
Currently with 1 play since last payout
Remaining 9 plays to the next prize.
    - that means 9 more rounds before the next prize
    - 9 rounds * 3 quarters = 27 quarters => 59 -27 = 32 => 32 + 9 = 41 (with the prize)
    - marthaPlays + 27 = 30

The machines state are:
- First Machine: 10 plays since last payout
- Second Machine: 9 plays since last payout
- Third Machine: 10 plays since last payout => 9 quarters and 0 plays since last payout



The next machine to give a prize is the third machine
Currently with 0 play since last payout
Remaining 10 plays to the next prize.
    - that means 10 more rounds before the next prize
    - 10 rounds * 3 quarters = 30 quarters => 41 -30 = 11 => 11 + 9 = 20 (with the prize)
    - marthaPlays + 30 = 60

The machines state are:
- First Machine: 20 plays since last payout
- Second Machine: 19 plays since last payout
- Third Machine: 10 plays since last payout => 9 quarters and 0 plays since last payout



Case 3:

First machine pays on 35th play
Second machine pays on 100th play
Third machine pays on 10th play

Each round adds 1 play to each machine

3 quarters, first starts with 0, second starts with 0, third starts with 9

First round:
- marthaPlays +3 = 3
- First Machine: 1 plays since last payout
- Second Machine: 1 plays since last payout 
- Third Machine: 10 plays since last payout => 9 quarters and 0 plays since last payout
- Prize 9
- Remaining quarters: (9 + 3) - 3 = 9

The machines state are:
- First Machine: 1 plays since last payout
- Second Machine: 1 plays since last payout
- Third Machine: 0 plays since last payout

The next machine to give a prize is the third machine
Currently with 0 play since last payout
Remaining 10 rounds to the next prize.
    - that means 10 more rounds before the next prize
    - 10 rounds * 3 quarters = 30 quarters => 9 - 30 = -21 => it only left 9 marthaPlays
**/
