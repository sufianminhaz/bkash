document.getElementById('add-money').addEventListener('click',function(event){
event.preventDefault();
const acount =document.getElementById('bank-acount').value;
const amount = document.getElementById('amount-number').value;
const convertedAmount = parseFloat(amount);
const pin = document.getElementById('pin').value;
const convertedPin = parseInt(pin);
const mainbalance = document.getElementById('main-balance').innerText
const convertedmainbalance = parseFloat(mainbalance)

if (convertedPin === 1234) {
   const sum = convertedmainbalance + convertedAmount
   const mainbalance = document.getElementById('main-balance').innerText = sum

   const container = document.getElementById('trasaction-history')
const p = document.createElement ('p');
p.innerText = `
added ${amount} from ${acount} account`
container.appendChild(p)

} else {
    console.log('vag')
}
})


