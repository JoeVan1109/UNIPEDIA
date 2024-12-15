function banner () {

    document.addEventListener("DOMContentLoaded", function () {
        let title = document.querySelector(".title-banniere");
        let imgPeluche = document.querySelector(".banniere-img");
    
        title.classList.add("active-title");
        imgPeluche.classList.add("active-banniere");
    });
};




banner();
