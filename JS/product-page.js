function banner () {

    document.addEventListener("DOMContentLoaded", function () {
        let title = document.querySelector(".title-product-peluche");
        let imgPeluche = document.querySelector(".banniere-img-peluche");
    
        title.classList.add("active-title");
        imgPeluche.classList.add("active-banniere");
    });
}


banner();
