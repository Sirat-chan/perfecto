import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  imageSrc: string=  '../../../assets/slider1.jpg';
   imagesSrc: string[] = [
    '../../../assets/slider1.jpg',
    '../../../assets/slider2.jpg',
    '../../../assets/slider3.jpg'
  ]
  // @ts-ignore
  private slider= document.getElementById("slider") ;

  private defaultTransform=0 ;

  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
  }

  onNext() {
    let index =this.imagesSrc.indexOf(this.imageSrc)
    this.imageSrc=this.imagesSrc[index+1];
  }

  onPrevious(){
    // let i=0;
  //if(i<0) i=this.imagesSrc.length;
  //i--;
  console.log(this.imagesSrc.indexOf(this.imageSrc))
    let index =this.imagesSrc.indexOf(this.imageSrc)
    this.imageSrc=this.imagesSrc[index-1];

  }

  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    // @ts-ignore
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    // @ts-ignore
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {

    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    // @ts-ignore
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
}
