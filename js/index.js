// getting all the value

// add event listener for calculate button
const calCulateButton = document.getElementById('calculate').addEventListener('click', function (){

    const income  = parseFloat(document.getElementById('income').value);
    const software  = parseFloat(document.getElementById('software').value);
    const courses  = parseFloat(document.getElementById('courses').value);;
    const internet = parseFloat(document.getElementById('internet').value);


    // validation
    if (income <=0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    if (software <0 || isNaN(income)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    if (courses <0 || isNaN(income)){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    if (internet <0 || isNaN(income)){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    // total expense validation
    if(totalExpenses > balance){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }


    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);


    const result = document.getElementById('results');
    result.classList.remove('hidden');

    // calculation history
    const historyContainer = document.getElementById('history-list');

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `

    <p class='text-xs text-grey-500'> ${new Date().toLocaleString()}</p>
    <p class='text-xs text-grey-500'>Income: ৳${income.toFixed(2)}</p>
    <p class='text-xs text-grey-500'>Expenses: ৳${totalExpenses.toFixed(2)}</p>
    <p class='text-xs text-grey-500'>Balance: ৳${balance.toFixed(2)}</p>
    `;

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);



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


// history tab functionality
const historyTab = document.getElementById('history-tab');
const assistantTab= document.getElementById('assistant-tab');


historyTab.addEventListener('click',function(){

    historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
})

// add event listener for Assistant button
assistantTab.addEventListener('click', function(){

    assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    historyTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    historyTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})


// live validation for input
document.getElementById('income').addEventListener('input',function(){
    const inputValue = parseFloat(document.getElementById('income').value);

    if (inputValue <=0 || isNaN(inputValue)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
})