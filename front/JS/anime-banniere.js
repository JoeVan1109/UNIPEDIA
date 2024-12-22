// Function to animate the banner display
function banner () {
    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Select the title element with the class "title-banniere"
        let title = document.querySelector(".title-banniere");
        // Select the image element with the class "banniere-img"
        let imgPeluche = document.querySelector(".banniere-img");
    
        // Add the class "active-title" to the title element to activate its animation
        title.classList.add("active-title");
        // Add the class "active-banniere" to the image element to activate its animation
        imgPeluche.classList.add("active-banniere");
    });
};

// Call the banner function to execute the animation
banner();