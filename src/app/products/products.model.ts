export class product{
 public nameProduct : string;
 public imageSrc: string;
 public price : number;
 public availability : boolean;
 public note : number;

  constructor(namePro: string, imageS: string, price: number, availability: boolean, note: number) {
   this.nameProduct=namePro;
   this.imageSrc=imageS;
   this.price=price;
   this.availability=availability;
   this.note=note;
 }
}
