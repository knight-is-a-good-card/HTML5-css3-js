function verificarIdade() {
    const idade = document.querySelector("#idade").value
    const img = document.querySelector("#imgPlace");
            document.body.style.backgroundColor = 'lightblue';

    const idadeNum = Number(idade)
     if (idadeNum < 0){
        alert("Claramente você ainda não existia")
     }else if (idadeNum <= 5 ){
        img.src = "bebeLouco.jpg"
        img.alt = "Uma foto de um bebê"
    }else if (idadeNum >= 5 && idadeNum <= 13){
        img.src = "cresceuMesmo.webp"
        img.alt ="Uma foto de uma criança"
    }else if (idadeNum >= 13 && idadeNum <= 18){
        img.src ="adolescenteComum.jpg"
        img.alt = "Apenas um adolescente comum"
    }else if (idadeNum >= 18 && idadeNum <= 70){
        img.src = "agoraQueSaiDaEscola.jpg"
        img.alt = "Não importa oque faça, você não pode fugir"
    }else if (idadeNum >= 70 && idadeNum <= 110){
        img.src = "feijaoFarinha.webp"
        img.alt = "diga uma palavra em inglês"
    }else if (idadeNum >= 110){
        img.src = "caveira_para_assustar.jpg"
        img.alt = "Provavelmente até lá você vai ter ido de arrasta"
        document.body.style.backgroundColor = "black"
    }else {
    
    }

}
