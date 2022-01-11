const personAccount = {
    firstName: "Alaattin",
    lastName: "Ataç",
    incomes: [6000, 5000, 3000],
    expenses: [5000, 1500, 4000],
}

totalIncome = () => personAccount.incomes.reduce((a, b) => a + b,0)
console.log(totalIncome());

totalExpense = () => personAccount.expenses.reduce((a, b) => a + b,0)
console.log(totalExpense());

personAccount.incomes.push(2000);
console.log(totalIncome());

personAccount.expenses.push(3500);
console.log(totalExpense());

accountInfo=(totalIncome()-totalExpense());
console.log(accountInfo);

console.log(`${personAccount.firstName}'in ${totalExpense()}TL geliri var.`);

