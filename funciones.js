let imgBox = document.getElementById("imgBox");
let imagenQr = document.getElementById("imagenQr");
let textQr = document.getElementById("textQr");
let btnDescargar = document.getElementById("btnDescargar");



function generarQR(){

if(textQr.value.length > 0){
        imagenQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value ;   
        imgBox.classList.add("show-img");
        btnDescargar.classList.add("show-btn");
}else{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'error',
        title: 'Debe ingresar un correo o texto'

    })
    textQr.classList.add('error');
    setTimeout(()=> {
        textQr.classList.remove('error');
    },1000);
}
    

}