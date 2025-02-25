document.getElementById('cashout-btn').addEventListener('click',function(event){
event.preventDefault();
const pin = document.getElementById('cashout-pin').value;
const convertedPin = parseInt(pin);
const amount = document.getElementById('cashout-amount').value;
const convertedAmount = parseFloat(amount);
const  mainbalance = document.getElementById('main-balance').innerText;
const convertedmainbalance = parseFloat(mainbalance);

if (convertedPin === 1234) {
    const sum = convertedmainbalance - convertedAmount;
    const mainbalance = document.getElementById('main-balance').innerText = sum
} else {
    alert('wrong pin')
}

})

