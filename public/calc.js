const calc = new Calculator(); 
const display = $('#display'); 
display.text(0);
//CSS values
$('.number').css('margin', '5px'); 
$('.operator').css('margin', '5px'); 
$('table').css('text-align', 'center'); 
display.css('text-align', 'right'); 
//Event listening
$('.number').click(function (event) {
    calc.setNumber(calc.getNumber() + $(this).text()); 
    display.text(calc.getNumber());
});

$('.operator').click(function (event) {
    let num = parseInt(calc.getNumber()); 
    if (typeof num === 'number' && !isNaN(num)){
        calc.expression.push(parseInt(calc.getNumber()));
        calc.setNumber('');
    }
    let operator = $(this).text(); 
    switch(operator){
        case 'C':calc.clear();break;
        case '+':calc.getExpression().push('+');break; 
        case '-':calc.getExpression().push('-');break; 
        case '/':calc.getExpression().push('/'); break;
        case '%': calc.getExpression().push('%'); break;     
        case 'X': calc.getExpression().push('x'); break; 
        case '+/-':
            display.text(calc.flip()); 
            break;    
        case '=':
            if (calc.getExpression().length === 0) {
                calc.clear(); 
            }    
            else {
                display.text(calc.evaluate()); break;
            }
    }
});

$(document).keydown(function (event) {
    let numbers = $('.number');
    let key = String.fromCharCode(event.which); 
    for (var i = 0; i < numbers.length; i++){
        if (key == numbers.eq(i).text()) {
            numbers.eq(i).click();
        }
    }
});
$(document).keydown(function (event) {
    let operators = $('.operator');
    let key = determineOperator(event.which);
    for (var i = 0; i < operators.length; i++) {
        if (key == operators.eq(i).text()) {
            operators.eq(i).click();
        }
    }
}); 
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
