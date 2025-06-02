let +resistencia, +tensao, +corrente, +result

function resultado(){
    resistencia = document.getElementById("resistencia").value
    tensao = document.getElementById("tensao").value
    corrente = document.getElementById("corrente").value
    if(
    document.getElementById("corrente").value == "" && 
    document.getElementById("tensao").value == "" &&
    document.getElementById("resistencia").value == ""){
        alert("ERRO! Digite no mínimo dois valores para realizar o cálculo")
    }else if(
        document.getElementById("corrente").value == "" && 
        document.getElementById("tensao").value == ""){
            alert("ERRO! Digite no mínimo dois valores para realizar o cálculo")
    }else if(
        document.getElementById("corrente").value == "" &&
        document.getElementById("resistencia").value == ""){
            alert("ERRO! Digite no mínimo dois valores para realizar o cálculo")
    }else if( 
        document.getElementById("tensao").value == "" &&
        document.getElementById("resistencia").value == ""){
            alert("ERRO! Digite no mínimo dois valores para realizar o cálculo")
    }
    
    if(document.getElementById("corrente").value == ""){
        document.getElementById("resultado").innerHTML = `A corrente é igual a ${tensao / resistencia} A (amperes)`
        document.getElementById("resistencia").value = resistencia
        document.getElementById("tensao").value = tensao
        document.getElementById("corrente").value = tensao / resistencia
    }else if(document.getElementById("tensao").value == ""){
        document.getElementById("resultado").innerHTML = `A tensão é igual a ${resistencia * corrente} V (volts)`
        document.getElementById("resistencia").value = resistencia
        document.getElementById("tensao").value = resistencia * corrente
        document.getElementById("corrente").value = corrente
    }else if(document.getElementById("resistencia").value == ""){
        document.getElementById("resultado").innerHTML = `A resistência é igual a ${tensao / corrente} Ω (ohms)`
        document.getElementById("resistencia").value = tensao / corrente
        document.getElementById("tensao").value = tensao
        document.getElementById("corrente").value = corrente
    }else if(
    document.getElementById("corrente").value != ""&& 
    document.getElementById("tensao").value != ""&&
    document.getElementById("resistencia").value != ""){
        alert("Digite apenas dois valores realizar o cálculo!")
    }else{
        alert("ERRO! Digite no mínimo dois valores para realizar o cálculo")
    }
}
function apagar(){
    document.getElementById("resultado").innerHTML = "Resultado: "
    document.getElementById("corrente").value = ""
    document.getElementById("tensao").value = ""
    document.getElementById("resistencia").value = ""
}
function mudaCorBt1(){
    document.getElementById("bt1").style.backgroundColor = "gray"
}
function voltaCorBt1(){
    document.getElementById("bt1").style.backgroundColor = "white"
}
function mudaCorBt2(){
    document.getElementById("bt2").style.backgroundColor = "gray"
}
function voltaCorBt2(){
    document.getElementById("bt2").style.backgroundColor = "white"
}