let num1 = null;
let num2 = null;
let operador = null;
let resultado = null;

const display = document.getElementById("display");
const historico = document.getElementById("historico");

function insert(valor) {
  if (valor === ',' || valor === '.') {
    if (!display.value.includes('.') && !display.value.includes(',')) {
      display.value += '.';
    }
  } else {
    display.value += valor;
  }
}

function setOperador(op) {
  if (display.value === "") return;
  num1 = parseFloat(display.value.replace(',', '.'));
  operador = op;
  display.value = "";
}

function calcular() {
  if (num1 === null || operador === null || display.value === "") return;

  num2 = parseFloat(display.value.replace(',', '.'));

  switch (operador) {
    case "+": resultado = num1 + num2; break;
    case "-": resultado = num1 - num2; break;
    case "*": resultado = num1 * num2; break;
    case "/": resultado = num2 !== 0 ? num1 / num2 : "Erro"; break;
  }

  display.value = resultado;

  if (resultado !== "Erro") {
    const item = document.createElement("li");
    item.textContent = `${num1} ${operador} ${num2} = ${resultado}`;
    item.onclick = () => { display.value = resultado; };
    historico.appendChild(item);
  }

  num1 = resultado;
  operador = null;
  num2 = null;
}

function backspace() {
  display.value = display.value.split("").slice(0, -1).join("");
}

function limpar() {
  display.value = "";
  num1 = null;
  num2 = null;
  operador = null;
  resultado = null;
}
