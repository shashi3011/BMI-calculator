function unlocked(){
    let title =document.getElementById('heading');
    let btn = document.getElementById('btn');
    title.innerText = 'Congratulations! now you can start learning DOM!';
    btn.style.display = 'none'
}


function welcome(){
    let studentName = document.getElementById('name');
    let nameSpan = document.getElementById('namespan');
    nameSpan.innerText = studentName.value;
    studentName.value = ""  
}



function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    let result = (amount.value / persons.value).toFixed(2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
}

let counter = 0;
let counterResult = document.getElementById('counterResult');
function increment(){
    counter = counter+1;
    counterResult.innerText = counter; 
}

function decrement(){
    if(counter>0){
    counter = counter-1;
    counterResult.innerText = counter; 
    }
}

function bmi(){
    let weight = document.getElementById('weight');
    let height = document.getElementById('height')
    let result = ((weight.value / (height.value*height.value))*10000).toFixed(2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
    let statement = document.getElementById('statement');
    if(result<18.5){
        statement.innerText="You are Underweight";
    }

    else if(result>=18.5 && result<=24.9){
        statement.innerText="You are with Normal Weight"
    }

    else if(result>=25 && result<=29.9){
        statement.innerText="You are Overweight"
    }

    else if(result>=30 && result<=35){
        statement.innerText="You have Obesity"
    }

    else if(result>35){
        statement.innerText="You have Severe Obesity"
    }
}