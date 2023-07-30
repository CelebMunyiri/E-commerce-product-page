'use strict'
const images=['./images/image-product-2-thumbnail.jpg','./images/image-product-3-thumbnail.jpg','./images/image-product-4-thumbnail.jpg']
const previous=document.querySelector('.previous')
const next=document.querySelector('.nextimg')
let imageProduct=document.querySelector('.imgProduct')
next.addEventListener('click',()=>{
    let currentImage=0;
    currentImage=currentImage+1;
    imageProduct.src=currentImage;
    alert("Cllcked hard")

})