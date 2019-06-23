var expression = "";
var result;
var exp;

function evaluate(){
  exp = expression.replace('X', '*');
  result = eval(exp);
  //console.log(result);
  if(result.toString().length > 5){
    result = result.toExponential();
      if(result.toString().length>5 && result%1 != 0){
        result = Number(result).toPrecision(5);
        result = Number(result).toExponential();
      }
  }

  if(result.toString().length > 8){
    document.getElementById('output').style.fontSize = "28px";
  }
  else{
    document.getElementById('output').style.fontSize = "42px";
  }
  document.getElementById('output').textContent = result;
}

function updateString(ch) {
  if(expression.length<20){
  //expression = expression.substring(0, expression.length - 1);
  expression = expression + ch;
  //console.log(expression);
  document.getElementById('input').textContent = expression;

    if (!isNaN(expression.charAt(expression.length - 1))){
      evaluate();
    }
  }
  else{
    alert("Maximum 20 Characters");
  }
}

function backspace(){
  if(expression.length > 1){
    expression = expression.substring(0,expression.length - 1);
  }
  //console.log(expression);
  document.getElementById('input').textContent = expression;
  if (!isNaN(expression.charAt(expression.length - 1))) {
    evaluate(expression);
  }
}

function clearString(){
  expression = "";
  //console.log(expression);
  document.getElementById('input').textContent = "";
  document.getElementById('output').textContent = "0";
}

function equal(){
  document.getElementById('input').textContent = Number(document.getElementById('output').textContent).toString();
  document.getElementById('output').textContent = '0';
  exp = "";
  expression = "";
  result = 0;
}
