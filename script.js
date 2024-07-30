const line = document.getElementById('line');
let x = 0;
let y=0;
let operator = '';
const clear = document.getElementById('clear');
clear.addEventListener('click', function(){line.value = ''})
const num1 = document.getElementById('num1');
num1.addEventListener('click', function(){ line.value+='1'})
const num2 = document.getElementById('num2');
num2.addEventListener('click', function(){ line.value+='2'})
const num3 = document.getElementById('num3');
num3.addEventListener('click', function(){ line.value+='3'})
const num4 = document.getElementById('num4');
num4.addEventListener('click', function(){ line.value+='4'})
const num5 = document.getElementById('num5');
num5.addEventListener('click', function(){ line.value+='5'})
const num6 = document.getElementById('num6');
num6.addEventListener('click', function(){ line.value+='6'})
const num7 = document.getElementById('num7');
num7.addEventListener('click', function(){ line.value+='7'})
const num8 = document.getElementById('num8');
num8.addEventListener('click', function(){ line.value+='8'})
const num9 = document.getElementById('num9');
num9.addEventListener('click', function(){ line.value+='9'})
const num0 = document.getElementById('num0');
num0.addEventListener('click', function(){ line.value+='0'})
const plus = document.getElementById('plus');
plus.addEventListener('click', function(){ line.value+=' + '; operator = '+'})
const minus = document.getElementById('minus');
minus.addEventListener('click', function(){ line.value+=' - '; operator = '-'})
const multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', function(){ line.value+='*';  operator = '*'})
const division = document.getElementById('division');
division.addEventListener('click', function(){ line.value+='/'; operator = '/'})
const equals = document.getElementById('equals');
equals.addEventListener('click', function(){
  if(operator){
    let nums = line.value.split(operator);
    if (nums.length === 2) {
    x = Number(nums[0]);
    y = Number(nums[1]);
  switch(operator){
      case '+':
      line.value=(x+y)
      break
      case '-':
      line.value=(x-y);
      break;
      case '*':
      line.value=(x*y);
      break;
      case '/':
      line.value=(x/y);
    }
  }
  else{line.value='чисел не два'}
  }
  else{line.value='оператора нет';}
})
