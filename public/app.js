//attempt at refactored code

const calc = new Calculator();
//Listen for events 
$('.number').click(function (event) {
    listenForNumberClick($(this).text(), calc); 
});
$('.operator').click(function (event) {
    listenForOperatorClick($(this).text(), calc); 
});
///Number keydown
$(document).keydown(function (event) {
    let numbers = $('.number');
    let key = String.fromCharCode(event.which);
    for (var i = 0; i < numbers.length; i++) {
        if (key == numbers.eq(i).text()) {
            numbers.eq(i).click();
        }
    }
});
//Operator keydown 
$(document).keydown(function (event) {
    let operators = $('.operator');
    let key = determineOperator(event.which);
    for (var i = 0; i < operators.length; i++) {
        if (key == operators.eq(i).text()) {
            operators.eq(i).click();
        }
    }
});
///function paths 
function listenForNumberClick(number, calc) {
    return calc.setDisplay(setNumber(calc, number)); 
}
function listenForOperatorClick(operator, calc) {
    return determineOperator(operator, pushNumber(parseNumber(calc.getNumber(), calc))); 
}
function listenForNumberKeyDown(listener, calc) {
    if (listener() != undefined) {
        
    }
    listener();
}  
function listenForOperatorKeyDown(listener, calc) {
    if (listener() != undefined) {
        const operators = $('.operator');
        const key = determineOperator(listener());
        for (var i = 0; i < operators.length; i++) {
            if (key == operators.eq(i).text()) {
                operators.eq(i).click();
            }
        }   
    }
}
function updateDisplay(calc, number) {
    return calc.setDisplay(number); 
}
function setNumber(calc, number) {
    return calc.setNumber(calc.getNumber() + number); 
}
function parseNumber(numberAsString) {
    return parseInt(numberAsString); 
}
function pushNumber(number, calc) {
    if (typeof number === 'number' && !isNaN(number)){
        this.calc.getExpression().push(number);
        this.calc.setDisplay(number); 
        this.calc.setNumber('');
        return number; 
    }
    return 'error'; 
}
function determineOperator(key) {
    switch (key) {
        case 189: key = '-';break;    
        case 187:key = '=';break; 
        case 186:key = '+';break;
        case 67: key = 'C';break;
        case 191:key = '/';break; 
        case 88: key = 'X'; break;
        case 8: calc.deleteOne();break;   
    }
    return key; 
}
function pushOperator(operator, number, calc) {
    switch(operator){
        case 'C':calc.setDisplay(calc.clear());break;
        case '+':calc.getExpression().push('+');break; 
        case '-':calc.getExpression().push('-');break; 
        case '/':calc.getExpression().push('/'); break;
        case '%': calc.getExpression().push('%'); break;     
        case 'X': calc.getExpression().push('x'); break; 
        case '+/-':
        calc.setDisplay(calc.flip()); 
            break;    
        case '=':
            if (calc.getExpression().length === 0) {
                calc.setDisplay(calc.clear()); 
            }    
            else {
                calc.setDisplay(calc.evaluate()); break;
            }
    } 
}
    function getListenKeyDownOperator() {
        $(document).keydown(function (event) {
            let operators = $('.operator');
            determineOperator(event.which);
            for (var i = 0; i < operators.length; i++) {
                if (key == operators.eq(i).text()) {
                    operators.eq(i).click();
                }
            }
        });
    }









//CSS modifications
$('.number').css('margin', '5px'); 
$('.operator').css('margin', '5px'); 
$('table').css('text-align', 'center'); 
$('#display').css('text-align', 'right'); 