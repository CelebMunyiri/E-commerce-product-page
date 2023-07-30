'use strict'
const images=['./images/image-product-2-thumbnail.jpg','./images/image-product-3-thumbnail.jpg','./images/image-product-4-thumbnail.jpg']
const previous=document.querySelector('.previous')
const next=document.querySelector('.nextimg')
let imageProduct=document.querySelector('.imgProduct')

let currentImage=0;
next.addEventListener('click',()=>{
    currentImage=currentImage+1;
    imageProduct.src=images[currentImage];
    if(currentImage==images.length){
        let currentImage=0
    }
    
   
    
})