function playSoundPom(){
    document.querySelector('#som_tecla_pom').play();
}
function playSoundClap(){
    document.querySelector('#som_tecla_clap').play();
}
function playSoundTim(){
    document.querySelector('#som_tecla_tim').play();
}
function playSoundPuff(){
    document.querySelector('#som_tecla_puff').play();
}
function playSoundSplash(){
    document.querySelector('#som_tecla_splash').play();
}
function playSoundToim(){
    document.querySelector('#som_tecla_toim').play();
}
function playSoundPsh(){
    document.querySelector('#som_tecla_psh').play();
}
function playSoundTic(){
    document.querySelector('#som_tecla_tic').play();
}
function playSoundTom(){
    document.querySelector('#som_tecla_tom').play();
}




//query selectors
document.querySelector('.tecla_pom').onclick = playSoundPom;
document.querySelector('.tecla_clap').onclick = playSoundClap;
document.querySelector('.tecla_tim').onclick = playSoundTim;
document.querySelector('.tecla_puff').onclick = playSoundPuff;
document.querySelector('.tecla_splash').onclick = playSoundSplash;
document.querySelector('.tecla_toim').onclick = playSoundToim;
document.querySelector('.tecla_psh').onclick = playSoundPsh;
document.querySelector('.tecla_tic').onclick = playSoundTic;
document.querySelector('.tecla_tom').onclick = playSoundTom;
