let + resistencia, +tensao, +corrente;

function resultado() {
  resistencia = document.getElementById("resistencia").value;
  tensao = document.getElementById("tensao").value;
  corrente = document.getElementById("corrente").value;

  //validacao  
  if (
    document.getElementById("corrente").value == "" &&
    document.getElementById("tensao").value == "" &&
    document.getElementById("resistencia").value == ""
  ) {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
  } else if (
    document.getElementById("corrente").value == "" &&
    document.getElementById("tensao").value == ""
  ) {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
  } else if (
    document.getElementById("corrente").value == "" &&
    document.getElementById("resistencia").value == ""
  ) {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
  } else if (
    document.getElementById("tensao").value == "" &&
    document.getElementById("resistencia").value == ""
  ) {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
  }

  //calculo corrente
  if (document.getElementById("corrente").value == "") {
    document.getElementById("resultado").innerHTML = `Corrente = ${tensao / resistencia} A (amperes)`;
    document.getElementById("resistencia").value = resistencia;
    document.getElementById("tensao").value = tensao;
    document.getElementById("corrente").value = tensao / resistencia;
  }

  //calculo tensao
  else if (document.getElementById("tensao").value == "") {
    document.getElementById("resultado").innerHTML = `Tensão = ${resistencia * corrente} V (volts)`;
    document.getElementById("resistencia").value = resistencia;
    document.getElementById("tensao").value = resistencia * corrente;
    document.getElementById("corrente").value = corrente;
  }

  //calculo resistencia
  else if (document.getElementById("resistencia").value == "") {
    document.getElementById("resultado").innerHTML = `Resistência = ${tensao / corrente} Ω (ohms)`;
    document.getElementById("resistencia").value = tensao / corrente;
    document.getElementById("tensao").value = tensao;
    document.getElementById("corrente").value = corrente;
  } 
  
  //validacao
  else if (
    document.getElementById("corrente").value != "" &&
    document.getElementById("tensao").value != "" &&
    document.getElementById("resistencia").value != ""
  ) {
    alert("Digite apenas dois valores realizar o cálculo!");
  } else {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
  }
}
function apagar() {
  document.getElementById("resultado").innerHTML = "Resultado: ";
  document.getElementById("corrente").value = "";
  document.getElementById("tensao").value = "";
  document.getElementById("resistencia").value = "";
}
function mudaCorBt1() {
  document.getElementById("bt1").style.backgroundColor = "gray";
}
function voltaCorBt1() {
  document.getElementById("bt1").style.backgroundColor = "white";
}
function mudaCorBt2() {
  document.getElementById("bt2").style.backgroundColor = "gray";
}
function voltaCorBt2() {
  document.getElementById("bt2").style.backgroundColor = "white";
}
