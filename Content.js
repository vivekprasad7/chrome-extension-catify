let cuteCatImages = [
    
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg"

];

const images = document.getElementsByTagName("img");

for(let i=0; i< images.length; i++){
    const randomImg = Math.floor(Math.random() * cuteCatImages.length);
    images[i].src = cuteCatImages[randomImg];
}