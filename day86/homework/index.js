const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prew-button');
const nextButton = document.getElementById('next-button');


const images = ["OIP(1).jpg", "OIP(1).jpg", "Locals-Guide-to-Vienna-Austria.webp"]
let currentIndex = 0;

prevButton addEventListener("click", () =>{
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    updateteImage();
});

nextButton addEventListener("click", () =>{
    currentIndex = (currentIndex + 1) % images.length;
    updateteImage();
});



function updateteImage(){
    const img = gallery.querySelector("#currentimg");
    img.classList("fade-out")
    setTimeout(() => {
        img.src = images[currentIndex]
        img.alt = images[currentIndex]
        img. = classList.remove["fade-out"]

    },500)
}