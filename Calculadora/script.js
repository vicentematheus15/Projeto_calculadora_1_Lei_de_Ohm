let resistencia, tensao, corrente

function resultado(){
    if(document.getElementById("corrente").value == ""){
        resistencia = document.getElementById("resistencia").value
        tensao = document.getElementById("tensao").value
        document.getElementById("resultado").innerHTML = `A corrente é igual a ${tensao / resistencia} A (amperes)`
        document.getElementById("resistencia").value = ""
        document.getElementById("tensao").value = ""
        document.getElementById("corrente").value = ""
    }else if(document.getElementById("tensao").value == ""){
        resistencia = document.getElementById("resistencia").value
        corrente = document.getElementById("corrente").value
        document.getElementById("resultado").innerHTML = `A tensão é igual a ${resistencia * corrente} V (volts)`
        document.getElementById("resistencia").value = ""
        document.getElementById("tensao").value = ""
        document.getElementById("corrente").value = ""
    }else if(document.getElementById("resistencia").value == ""){
        tensao = document.getElementById("tensao").value
        corrente = document.getElementById("corrente").value
        document.getElementById("resultado").innerHTML = `A resistência é igual a ${tensao / corrente} Ω (ohms)`
        document.getElementById("resistencia").value = ""
        document.getElementById("tensao").value = ""
        document.getElementById("corrente").value = ""
    }else if(document.getElementById("corrente").value != ""
    && document.getElementById("tensao").value != ""
    && document.getElementById("resistencia").value != ""){
        alert("Digite apenas dois valores realizar o cálculo!")
    }else{
        alert("ERRO! Digite ao menos dois valores para realizar o cálculo")
    }
}
function apagar(){
    document.getElementById("resultado").innerHTML = "Resultado: "
}
function mudaCor(){
    document.getElementById("bt1").style.backgroundColor = "gray"
}
function voltaCor(){
    document.getElementById("bt1").style.backgroundColor = "white"
}