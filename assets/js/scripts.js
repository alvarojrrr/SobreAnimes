$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 

const btnTokyo = document.getElementById("btn-tokyo");
const btnSobreMim = document.getElementById("btn-sobremim");
const btnTitan = document.getElementById("btn-titan");

function abaSobreMim(){
    var win = window.open('http://127.0.0.1:5500/assets/paginas/sobremim.html');
    win.focus();
    console.log('clicou');
}

btnSobreMim.addEventListener('click', abaSobreMim);

function abaTokyo(){
    var win = window.open('http://127.0.0.1:5500/assets/paginas/tokyo.html');
    win.focus();
    console.log('clicou');
}

btnTokyo.addEventListener('click', abaTokyo);

function abaTitan() {
    var win = window.open('http://127.0.0.1:5500/assets/paginas/titan.html');
    win.focus();
    console.log('clicou');
}

btnTitan.addEventListener('click', abaTitan);

