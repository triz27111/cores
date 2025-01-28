
const imagens = [
    "./download (1).jfif",
    "./download (3).jfif",
    "./download (4).jfif",
    "./download (5).jfif",
    "./download (6).jfif"
]
 
function trocaImagem(){

    const imagemPrimeira = imagens.shift();
    imagens.push(imagemPrimeira)

 
document.body.style.backgroundImage = 'url('${imagens[0]}')';
}
document.getElementById("troca-imagem").addEventListener("click", trocaImagem);
