/*
The Challenge

Pero has a data plan with his cell phone provider that oﬀers him x megabytes
of data per month.
In addition, any data he doesn’t use in a given month carries over to the next
month.
For example:
If x is 10 and Pero uses only 4MB in a given month, the remaining 6MB carry 
over to the next month (in which he’d now have 10 + 6 = 16MB available).
We’re given the number of megabytes of data that Pero uses in each of the 
ﬁrst n months.
Our task is to determinethe number of megabytes available for the following 
month.

Input

The input consists of the following parameters:

- A parameter containing integer x, the number of megabytes given to Pero per
month.
- A parameter containing integer n, the number of months that Pero has had the
data plan.
- n parameters, one for each month, giving the integer number of megabytes that
Pero uses in that month.
Each number is at least 0 and will never outstrip the number of available
megabytes.
For example:
If x is 10 and Pero currently has 30MB available, the next number will be at
most 30.

Output

Output the number of megabytes available for the next month.
**/
export function getMegabytesAvailable(plan, months, report) {
  let mbLeft = plan;
  for (let i = 0; i < months; i++) {
    mbLeft -= report[i];
    mbLeft += plan;
  }
  return mbLeft;
}
