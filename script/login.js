document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('acount-number').value;
    const pinNumber = document.getElementById('pin').value;
    if (acountNumber.length === 11) {
        

        if (pinNumber === '1234') {
            window.location.href ='./main.html'

        } else {
            alert('vag sala')
        }




    } else {
       alert('need valid acount')
    }




})