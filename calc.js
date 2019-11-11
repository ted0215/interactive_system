let disp;
let fClear = true;
let buffer = [];

function setup() {
  disp = document.getElementById("display");
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
    fClear = true;
  } else if (cmd == "+") {
      calc(function(a,b){return a+b;});
  } else if (cmd == "-") {
      calc(function(a,b){return a-b;});
  } else if (cmd == "*") {
      calc(function(a,b){return a*b;});
  } else if (cmd == "/") {
      calc(function(a,b){return a/b;});
  } else if (cmd == "+/-") {
      plusMinus();
  } else if (cmd == "Clear") {
    clear();
  }
}