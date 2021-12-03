function EffacerAnimationAccueil(){
    document.querySelector('.accueil__animation--blocBleu').remove();
}

window.addEventListener('load',function (){
    setTimeout(EffacerAnimationAccueil,4950);
})