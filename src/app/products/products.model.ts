export class Product{
 public name: string;
 public imageSrc: string;
 public price : number;
 public availability : boolean;
 public note : number;

  constructor(name: string, imageS: string, price: number, availability: boolean, note: number) {
   this.name=name;
   this.imageSrc=imageS;
   this.price=price;
   this.availability=availability;
   this.note=note;
 }
}
