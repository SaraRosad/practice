var operando = '';
var operanda = 0;
var operandb = 0;
var number =[];
var number2 =[];


$('#cero').on('click', function(){

     $('#result').append('<h2>0</h2>');
     number.push(0);
     number2.push(0);
});

$('#one').on('click', function(){

     $('#result').append('<h2>1</h2>');
     number.push(1);
     number2.push(1);
     
});

$('#two').on('click', function(){

    $('#result').append('<h2>2</h2>');
    number.push(2);
    number2.push(2);
     
});

$('#three').on('click', function(){

    $('#result').append('<h2>3</h2>');
    number.push(3);
    number2.push(3);
     
});

$('#four').on('click', function(){

    $('#result').append('<h2>4</h2>');
    number.push(4);
    number2.push(4);
});

$('#five').on('click', function(){

    $('#result').append('<h2>5</h2>');
    number.push(5);
    number2.push(5);
     
});

$('#six').on('click', function(){

     $('#result').append('<h2>6</h2>');
     number.push(6);
     number2.push(6);
     
});

$('#seven').on('click', function(){

     $('#result').append('<h2>7</h2>');
     number.push(7);
     number2.push(7);
     
});

$('#eight').on('click', function(){

     $('#result').append('<h2>8</h2>');
     number.push(8);
     number2.push(8);
     
});

$('#nine').on('click', function(){

     $('#result').append('<h2>9</h2>');
     number.push(9);
     number2.push(9);
     
});

$('#point').on('click', function(){

    $('#result').append('<h2>.</h2>');
    number.push('.');
    number2.push('.');
     
});

$('#plus').on('click', function(){

    operanda = number.reduce(getSum, 0);
    operando = '+';
    clean();

});

$('#rest').on('click', function(){

    operanda = number.reduce(getRest, 0);
    operando = '-';
    clean();

});

$('#div').on('click', function(){

    operanda =number.reduce(getDiv, 0);
    operando = '/';
    clean();

});

$('#residual').on('click', function(){

    operanda = number.reduce(getResid, 0);
    operando = '%';
    clean();

});

$('#cleanAll').on('click', function(){
  resetAll();
});

$('#clean')s.on('click', function(){
    clean();
});

$('#equal').on('click', function(){
    operandb = number2.reduce(getSum, 0);
    calculate();
});

$('#backspace').on('click',function(){
    lastIndex();
});

function lastIndex(){
    clean();
    number.pop();
    number.forEach((value) => {
        $("#result").html(`${$("#result").html()}<h2>${value}</h2>`);
    });
}

function resetAll(){
    operanda = 0;
    operandb = 0;
    operando = '';
    number = [];
    $('#result').html('').remove('h2');
}

function clean(){
    $('#result').html('');
}

function resultCal(r, n){

 $('#result').html('<h2>'+r+'</h2>');

}

function getSum(total, num){
    if(operando == '+'){
        total = parseFloat(operanda) + parseFloat(operandb);
        return total + Math.round(num);
    } 
}
function getDiv(total, num){
    if(operando == '/'){
        total = parseFloat(operanda) / parseFloat(operandb);
        return total + Math.round(num);
    }  
}
function getMult(total, num){
    if(operando == '*'){
        total = parseFloat(operanda) * parseFloat(operandb);
        return total + Math.round(num);
    } 
}
function getRest(total, num){
    if(operando == '*'){
        total = parseFloat(operanda) - parseFloat(operandb);
        return total - Math.round(num);
    }
}
function getResid(total, num){
    if(operando == '%'){
        total = parseFloat(operanda) - parseFloat(operandb);
        return total % Math.round(num);
    }
}
/* function calculate(total){
    switch (operando) {
        case '+':
            total = parseFloat(operanda) + parseFloat(operandb);
            break;

        case '-':
            total = parseFloat(operanda) - parseFloat(operandb);
            break;

        case '/':
            total = parseFloat(operanda) / parseFloat(operandb);
            break;

        case '%':
            total = parseFloat(operanda) % parseFloat(operandb);
            break;
                        
    }
 */
   /*  resetAll();
    resultCal(total);
} */
