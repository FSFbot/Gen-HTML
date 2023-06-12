function validerFormulario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var endereco = document.getElementById("endereco").value;

    erro = false;
    // Validação dos campos
    if(nome === "" || nome.value < 3){
        document.getElementById("nomeErro").innerHTML= "Por favor digite seu nome de forma correta";
    }else{
        document.getElementById("nomeErro").innerHTML = "";
    }

    if(email === "" || email.value < 3){
        document.getElementById("emailErro").innerHTML = "Por favor, digite o assunto";
        erro = true;
    }else{
        document.getElementById(emailErro).innerHTML = "";

    }
    // Validação do campo assunto
    if(assunto === ""){
        document.getElementById("assuntoErro").innerHTML = "Por favor informe um assunto";
        erro = true;
    }else{
        document.getElementById("assuntoErro").innerHTML = "";
    }

    //Validação campo de endereço
    if(endereco === "" || endereco.value < 3 ){
        document.getElementById("enderecoErro").innerHTML = "Por favor coloque de forma correta esta informação"
    }else{
        document.getElementById("enderecoErro").innerHTML = "";
    }
    if(erro){
        return false; // Impede o envio do formulario se houver erros
    }
}