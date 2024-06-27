/*
The Challenge

Baker Brie has a number of franchisees, each of which sells baked goods to
consumers.
Having reached the milestone of being in business for 13 years,
Baker Brie will celebrate by awarding bonuses based on sales.
The bonuses depend on sales per day and sales per franchisee.

Here’s how the bonuses work:

- For every day on which the total sales across all franchisees is a multiple
of 13, that multiple will be given as bonuses.
For example:
 A day where the franchisees sold a combined 26 baked goods will add
 26 / 13 = 2 bonuses to the total.

- For every franchisee whose total sales across all days is a multiple of 13,
that multiple will be given as bonuses.
For example:
  A franchisee that sold a total of 39 baked goods will add 39 / 13 = 3 
  bonuses to the total.

Determine the total number of bonuses awarded.

Input

The input consists of 10 test cases. Each test case contains
the following lines:
- First parameter: numberOfFranchisees (between 4 and 130)
- Second parameter: numberOfDays (between 2 and 4,745)
- Third parameter: salesData an array of arrays with integers
(between 1 and 13,000) Each integer speciﬁes a number of sales.
The ﬁrst integer of these arrays gives the sales for each franchise on the
ﬁrst day, the second gives the sales for each franchise on the second day, and
so on.

Output

For each test case, output the total number of bonuses awarded.
* */
export function getBonusesAwarded(
  numberOfFranchisees,
  numberOfDays,
  salesData,
) {
  let totalSales = new Array(numberOfDays).fill(0);
  let totalBonuses = 0;

  // Calculate bonuses for each franchisee's total sales
  salesData.forEach((sales) => {
    let salesSum = sales.reduce((acc, current) => acc + current, 0);
    if (salesSum % 13 === 0 && salesSum !== 0) {
      totalBonuses += salesSum / 13;
    }
    sales.forEach((sale, index) => {
      totalSales[index] += sale;
    });
  });

  // Calculate bonuses for each day's total sales
  totalSales.forEach((dailySales) => {
    if (dailySales % 13 === 0 && dailySales !== 0) {
      totalBonuses += dailySales / 13;
    }
  });

  return totalBonuses;
}

