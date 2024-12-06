let input = document.querySelector(".inp");
let imgBox =document.querySelector(".Img-box");
let qrImage = document.querySelector("#qrImg");
let Btn = document.querySelector(".qrBtn");
let hide =document.querySelector(".hide");


function generateQR(){
    if(input.value.length > 0){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        hide.classList.remove("hide");
    }else{
        Swal.fire({
            title: "Oops!",
            text: "Please fill the input field!",
            icon: "question"
          });
    }
}
