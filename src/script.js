document.addEventListener('DOMContentLoaded', () => {
const msg = document.getElementById('span-sucesso');
const confirmar = document.getElementById('botao-confirmar');
const img = document.getElementById('imagem-carregamento');

let btn = document.querySelector('.olho');
btn.addEventListener('click', function() {

    let input = document.querySelector('#input-senha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
    
});

const login = async () => {

    const email = document.getElementById('input-email').value;
    const senha = document.getElementById('input-senha').value;       
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
        msg.style.display = 'block';
        img.style.display = 'inline';

        setTimeout(() => {
            window.location.href = "../public/dashboard.html";
        }, 2000);

        return;
    }

    msg.style.display = 'block';
    msg.innerText = `E-mail ou senha incorretos, favor tente novamente.`
}

confirmar.addEventListener('click', login);

});