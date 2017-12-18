//Working class 

class Calculator {
    constructor() {
        this.number = '';
        this.expression = [];
        this.display = $('#display'); 
        this.numbers = $('.numbers'); 
    }
    flip() {
        let length = this.expression.length; 
        return this.expression[length - 1] = -Math.abs(this.expression[length - 1]); 
    }
    deleteOne() {
        this.number = this.number.substring(0, this.number.length - 1);
        return number; 
    }
    reset() {
        if (expression.length > 0) {
            while (expression.length != 0) {
                expression.pop();
            }
        }
    }
    clear() {
        if (this.expression.length > 0) {
            while (this.expression.length != 0) {
                this.expression.pop();
            }
        }
        display.text(''); 
    }
    evaluate() {
        let result = 0;
        if (this.expression.length !== 0) {
            for (let i = 0; i < this.expression.length; i++) {
                switch (this.expression[i]) {
                    case '+':
                        result += this.expression[++i];
                        break;
                    case '-':
                        result -= this.expression[++i];
                        break;
                    case '/':
                        result /= this.expression[++i];
                        break;
                    case 'x':
                        result *= this.expression[++i];
                        break;
                    case '%':
                        result %= this.expression[++i];
                        break;
                    default:
                        result += this.expression[i];
                        break;
                }
            }
            return result;
        }
    }
    getExpression() {
        return this.expression; 
    }
    getDisplay() {
        return this.display.text(); 
    }
    getNumbers() {
        return this.numbers; 
    }
    setDisplay(number) {
       return this.display.text(number);
    }
    getNumber() {
        return this.number; 
    }
    setNumber(num) {
        return this.number = num; 
    }
}