/*
The Challenge

Students would like to go on a school trip at the end of the year, but they
need money to pay for it.
To raise money, they have organized a brunch.

To attend the brunch:
- a student in their ﬁrst year pays $12
- a student in their second year pays $10
- a student in their third year pays $7,
- a student in their fourth year pays $5.


Of all of the money raised at the brunch:
- 50 percent of it can be used to pay for the school trip (the other 50 percent
is used to pay for the brunch itself).

We are told the cost of the school trip, the proportion of students in each 
year, and the total number of students.
Determine whether the students need to raise more money for the school trip.

Input

The input consists of 10 test cases, with three lines per test
case (30 lines in all).
Here are the three lines for each test case:

- The ﬁrst line contains the cost in dollars of the school trip;
it’s an integer between 50 and 50,000.
- The second line contains four numbers indicating the proportion of brunching
students who are in ﬁrst, second, third, and fourth year, respectively.
There is a space between each pair of numbers.
Each number is between 0 and 1, and their sum is 1 (for 100 percent).
- The third line contains integer n, the number of students attending the
brunch. n is between 4 and 2,000.

Output

For each test case: if the students need to raise more money for the school
trip, output YES; otherwise, output NO.
**/
export function needMoreMoney(cost, proportions, students) {
  let moneyNeeded = cost * 2;
  let firstYears = students * proportions[0];
  let secondYears = students * proportions[1];
  let thirdYears = students * proportions[2];
  let fourthYears = students * proportions[3];
  let totalRaised =
    firstYears * 12 + secondYears * 10 + thirdYears * 7 + fourthYears * 5;
  return totalRaised < moneyNeeded ? 'YES' : 'NO';
}
