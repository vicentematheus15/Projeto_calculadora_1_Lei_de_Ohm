let resistencia, tensao, corrente;

function resultado() {
  
  resistencia = document.getElementById("resistencia").value;
  tensao = document.getElementById("tensao").value;
  corrente = document.getElementById("corrente").value;

  //verifica quantos das 3 variaveis da array estão preenchidos com valores válidos (não vazios)
  //filtra apenas os validos, montando uma nova array. a quantidade de valores nessa nova array sera a condicao
  const camposPreenchidos = [resistencia, tensao, corrente].filter(v => v !== "").length;

  //condicao 1 - todos os campos vazios  
  if (camposPreenchidos === 0) {
    alert("ERRO! Todos os campos estão vazios. Preencha pelo menos dois campos.");
    return

  //condicao 2 - apenas 1 campo preenchido
  }if (camposPreenchidos === 1) {
    alert("ERRO! Apenas um campo preenchido. Preencha dois campos.");
    return

  //condicao 3 - os 3 campos preenchidos
  }if (camposPreenchidos === 3) {
    alert("ERRO! Preencha apenas dois campos.");
    return
  }

  // Conversão dos valores para números (garantir que são números válidos)
  resistencia = parseFloat(resistencia);
  tensao = parseFloat(tensao);
  corrente = parseFloat(corrente);

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
  
  
}
function apagar() {
  document.getElementById("resultado").innerHTML = "Resultado: ";
  document.getElementById("corrente").value = "";
  document.getElementById("tensao").value = "";
  document.getElementById("resistencia").value = "";
}
function calculoCorrente (tensao,resistencia){
  return tensao / resistencia
}

function calculoTensao (resistencia,corrente){
  return resistencia * corrente
}

function calculoResistencia(tensao, corrente){
  return tensao / corrente
}
// Funções para mudar a cor do botão
function mudaCorBt(btId) {
  document.getElementById(btId).style.backgroundColor = "gray";
}

function voltaCorBt(btId) {
  document.getElementById(btId).style.backgroundColor = "white";
}