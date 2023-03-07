let cuteCatImages = [
    "https://pbs.twimg.com/media/FqPLhrqWIAwhrzK?format=jpg&name=large",
    "https://pbs.twimg.com/media/FqMarQfXsAAYf2y?format=jpg&name=900x900",
    
    
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg"

];

// const imgs = document.getElementsByTagName("img");

// for(let i=0; i< imgs.length; i++){
//     const randomImg = Math.floor(Math.random() * cuteCatImages.length);
//     imgs[i].src = cuteCatImages[randomImg];
// }

// function to replace the images
function replaceImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      const randomImg = Math.floor(Math.random() * cuteCatImages.length);
      images[i].src = cuteCatImages[randomImg];
    }
  }
  
  // Replacing the images when the page initially loads
  replaceImages();
  
  // Using MutationObserver to listen for changes to the page's DOM
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "childList") {
        replaceImages();
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });