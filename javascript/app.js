const button2 = document.getElementById('botao2');
let left = 40;
button2.addEventListener('mouseover', function () {
    if (left == 23) {
        left = 69;
    } else {
        left = 23;
    }
    this.style.left = left + '%';
});


document.getElementById('botao1').addEventListener('click', function () {
    swal("O MY GOD THANK YOU BABY", " LUV U SOO MUCH ");
});