let disp;
let stackValue = "";
let calcOperator = "";
let fClear = true;
let buffer = [];

function setup() {
  disp = document.getElementById("display");
  stackText = document.getElementById("stackText");
}

function add(v) {
  let ret;

  if (fClear) {
    ret = "" + v;
    fClear = false;
  } else {
    ret = disp.value + v;
  }
  disp.value = ret;
}

function clear() {
  fClear = true;
  stackValue = "";
  stackText.innerHTML = "";
  add("");
}

function number(event) {
  add(event.srcElement.value);
}

function calc(func) {
    let v = buffer.pop()
    if (v == null) return;
    let a = Number(v);
    let b = Number(disp.value);
    stackValue = stackValue + disp.value + " " + calcOperator;
    stackText.innerHTML = stackValue;
    let c = func(a, b);
    disp.value = String(c);
}

function plusMinus() {
    let a = Number(disp.value);
    disp.value = String(-a);
}

function operate(event) {
  let cmd = event.srcElement.value;

  if (cmd == "Enter") {
    buffer.push(disp.value);
    stackValue = stackValue + disp.value + " ";
    stackText.innerHTML = stackValue;
    fClear = true;
  } else if (cmd == "+") {
      calcOperator = "+ ";
      calc(function(a,b){return a+b;});
  } else if (cmd == "-") {
      calcOperator = "- ";
      calc(function(a,b){return a-b;});
  } else if (cmd == "*") {
      calcOperator = "* ";
      calc(function(a,b){return a*b;});
  } else if (cmd == "/") {
      calcOperator = "/ ";
      calc(function(a,b){return a/b;});
  } else if (cmd == "+/-") {
      plusMinus();
  } else if (cmd == "Clear") {
    clear();
  }
}