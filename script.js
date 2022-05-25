var index = 0;
var numberCounter = 0;
function getValue(event) {
    var text = event.target.innerText;
    var display1 = document.getElementById('main-display').innerText;
    if (text === '÷') {
        text = '/';
    }
    else if(text === ',') {
        text = '.';
    }
    else if(text === 'C') {
        index=0;
        document.getElementById('main-display').innerText = '';
        document.getElementById('second-display').innerText = '';
        return;
    }
    else if(text === 'DEL') {
        numberCounter--;
        if(numberCounter < 15) {
            document.getElementById('second-display').style.fontSize = '32px';
            document.getElementById('second-display').innerText = '';
        }
        if(display1[display1.length-1] === '.') index=index-1;
        document.getElementById('main-display').innerText = display1.slice(0,display1.length-1);
        return;
    }
    else if(text === '=') {
        index = 0;
        if(display1 === '') {
            document.getElementById('main-display').innerText = document.getElementById('second-display').innerText;
            document.getElementById('second-display').innerText = '';
            return;
        }
        document.getElementById('second-display').innerText = eval(display1);
        document.getElementById('main-display').innerText = '';
        return;
    }
    if(display1.length === 0 && (text === '/' || text === '*' || text === '-' || text === '+' || text === '.')) return;
    if((text === '/' || text === '*' || text === '-' || text === '+') && (display1[display1.length-1] === '/' || display1[display1.length-1] === '*'  || display1[display1.length-1] === '-' || display1[display1.length-1] === '+')) {
        document.getElementById('main-display').innerText = display1.slice(0,display1.length-1)+text;
        return;
    }
    debugger
    numberCounter = 0;
    for(let i=index; i<display1.length; i++) {
        if(Number(display1[i])>=0 && Number(display1[i])<=9) numberCounter++;
    }

    if(numberCounter === 15) {
        document.getElementById('second-display').style.fontSize = '16px';
        document.getElementById('second-display').innerText = 'You cannot enter more than 15 numbers.';
    }
    else {
        document.getElementById('second-display').style.fontSize = '32px';
        document.getElementById('second-display').innerText = '';
    }

    if(numberCounter >= 15) return;

    var counter = 0;
    for(let i=index; i<display1.length; i++) {
        if(display1[i] === '.') counter++;
        if(display1[i] === '/' || display1[i] === '*' || display1[i] === '-' || display1[i] === '+') {
            index = i;
            continue;
        }
        else if(counter === 1 && text === '.') return;
    }
    display1 = display1+text;
    mainDisplay(display1);
}

function mainDisplay(value) {
    document.getElementById('main-display').innerText = value;
}