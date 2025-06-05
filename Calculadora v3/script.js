let resistencia, tensao, corrente;

function resultado() {
  resistencia = document.getElementById("resistencia").value;
  tensao = document.getElementById("tensao").value;
  corrente = document.getElementById("corrente").value;

  //validacao  
  if (corrente == "" && tensao == "" && resistencia == "" || corrente == "" && resistencia == "" || corrente == "" && tensao == "" || tensao == "" && resistencia == "") {
    alert("ERRO! Digite no mínimo dois valores para realizar o cálculo");
    return
  }

  else if (corrente != "" && tensao != "" && resistencia != "") {
    alert("Digite apenas dois valores realizar o cálculo!");
    return
}

  //calculo corrente
  if (document.getElementById("corrente").value == "") {
    document.getElementById("resultado").innerHTML = `Corrente = ${tensao / resistencia} A (amperes)`;
    definirValores(resistencia, tensao, corrente)
    document.getElementById("corrente").value = tensao / resistencia;
  }

  //calculo tensao
  else if (document.getElementById("tensao").value == "") {
    document.getElementById("resultado").innerHTML = `Tensão = ${resistencia * corrente} V (volts)`;
    definirValores(resistencia, tensao, corrente)
    document.getElementById("tensao").value = resistencia * corrente;
  }

  //calculo resistencia
  else if (document.getElementById("resistencia").value == "") {
    document.getElementById("resultado").innerHTML = `Resistência = ${tensao / corrente} Ω (ohms)`;
    definirValores(resistencia, tensao, corrente)
    document.getElementById("resistencia").value = tensao / corrente;
  } 
  
}
function definirValores(resistencia, tensao, corrente){
  document.getElementById("resistencia").value = resistencia;
  document.getElementById("tensao").value = tensao;
  document.getElementById("corrente").value = corrente;
}
function apagar() {
  document.getElementById("resultado").innerHTML = "Resultado: ";
  document.getElementById("corrente").value = "";
  document.getElementById("tensao").value = "";
  document.getElementById("resistencia").value = "";
}