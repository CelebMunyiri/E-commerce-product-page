'use strict'
const images=['./images/image-product-1-thumbnail.jpg','./images/image-product-2-thumbnail.jpg','./images/image-product-3-thumbnail.jpg','./images/image-product-4-thumbnail.jpg']
const previous=document.querySelector('.previous')
const next=document.querySelector('.nextimg')
let imageProduct=document.querySelector('.imgProduct')

let currentImage=0;
next.addEventListener('click',()=>{
    currentImage=currentImage+1;
    imageProduct.src=images[currentImage];
    if(currentImage>=images.length-1){
        currentImage=0
        
    }    
})

previous.addEventListener('click',()=>{
    currentImage=currentImage-1
    imageProduct.src=images[currentImage]
    if(currentImage<=0){
        currentImage=images.length-1
    }
})