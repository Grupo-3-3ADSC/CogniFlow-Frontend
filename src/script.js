document.addEventListener('DOMContentLoaded', () => {
const msg = document.getElementById('span_sucesso');
const confirmar = document.getElementById('botao_confirmar');

const login = async () => {

    const email = document.getElementById('input_email').value;
    const senha = document.getElementById('input_senha').value;       
    const resposta = await fetch('http://localhost:3000/usuarios');
    const usuarios = await resposta.json(); 

  
    
    let usuarioEncontrado = false;

    for(i = 0; i < usuarios.length; i++){
        if(usuarios[i].email == email && usuarios[i].senha == senha){
            usuarioEncontrado = true;
            nomeUsuario = usuarios[i].nome;
            break;
        }
    }

    if(usuarioEncontrado){
        msg.innerText = `Bem-vindo ${nomeUsuario}!`
        return;       
    }

    msg.innerText = `E-mail ou senha incorretos, favor tente novamente.`
}

confirmar.addEventListener('click', login);

});