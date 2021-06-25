function mySum() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const mysum = parseInt(num1) + parseInt(num2);
    console.log(num1);
    console.log(num2);
    console.log(mysum);
    /*document.getElementById("sumResult").innerHTML = parseInt(num1) + parseInt(num2);*/
    document.getElementById("sumResult").innerHTML = mysum;
    /*const container = document.querySelector('#container');
    const pEle = document.createElement('p');
    pEle.textContent = mysum;
    container.appendChild(pEle);*/
}


const btn = document.querySelector('#sumBtn');
btn.addEventListener('click', mySum);

