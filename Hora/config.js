function carregar(){

    const mensagem = document.getElementById(mensagem);
    const imagem  = document.getElementById(imagem);
    const data = new Date;
    const hora = date.getHours();
    
    mensagem.innerHTML = `Agora são ${hora} horas.`;

    if(hora >=0 && hora <12){

        imagem.src = manha.png;
    }else if(hora >=12 && hora < 18){
        imagem.src =tarde.png;
    }else{
        imagem.src =noite.png;
    }
};


