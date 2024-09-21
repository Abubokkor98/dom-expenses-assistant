// getting all the value

// add event listener for calculate button
const calCulateButton = document.getElementById('calculate').addEventListener('click', function (){

    const income  = parseFloat(document.getElementById('income').value);
    const software  = parseFloat(document.getElementById('software').value);
    const courses  = parseFloat(document.getElementById('courses').value);;
    const internet = parseFloat(document.getElementById('internet').value);




    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);


    const result = document.getElementById('results');
    result.classList.remove('hidden');
})

// add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings').addEventListener('click',function(){

    const savingPercentage = parseFloat(document.getElementById('savings').value);
    console.log(savingPercentage);

    const income  = parseFloat(document.getElementById('income').value);
    const software  = parseFloat(document.getElementById('software').value);
    const courses  = parseFloat(document.getElementById('courses').value);;
    const internet = parseFloat(document.getElementById('internet').value);

    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercentage * balance) / 100;
    console.log(savingAmount);

    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);

})
