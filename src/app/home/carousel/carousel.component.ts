import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imageSrc: string=  '../../../assets/carousel-1%20(1).svg';
   imagesSrc: string[] = [
    '../../../assets/carousel-1%20(1).svg',
    '../../../assets/carousel-2%20(1).svg',
    '../../../assets/carousel-3%20(1).svg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
this.imageSrc=this.imagesSrc[1];
  }

  onPrevious(){
    // let i=0;
  //if(i<0) i=this.imagesSrc.length;
  //i--;
  console.log(this.imagesSrc.indexOf(this.imageSrc))
    let index =this.imagesSrc.indexOf(this.imageSrc)
    this.imageSrc=this.imagesSrc[index-1];

  }


}
