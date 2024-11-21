var result = document.getElementById("result");

var bottom = document.getElementById("bottomans");
var answer = 0;
function getanswer() {
  var num1 = parseInt(document.getElementById("input1").value);
  var num2 = parseInt(document.getElementById("input2").value);
  var options = document.getElementById("options").value;

  switch (options) {
    case "+":
      answer = num1 + num2;
      bottom.innerText="The sum is: "+answer;
    //   printanswer("sum",answer);
      break;
    case "-":
      answer = num1 - num2;
      printanswer("difference",answer);
      break;
    case "*":
      answer = num1 * num2;
      printanswer("product",answer);
      break;
    case "/":
      answer = num1 / num2;
      printanswer("division quotient",answer);
      break;
    case "%":
      answer = num1 % num2;
      printanswer("division remainder",answer);
      break;
    default:
        alert("Invalid operator");
  }
}

function printanswer(opr,answer) {
  bottom.innerText = "The "+opr+" is: "+answer;
}
