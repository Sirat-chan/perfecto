export class Product{
  public id : number;
 public name: string;
 public imageSrc: string;
 public price : number;
 public availability : boolean;
 public rating : number;
  public isFavorite : boolean;


  constructor(id: number,name: string, imageS: string, price: number, availability: boolean, rating: number, isFavorite:boolean) {
    this.id=id;
   this.name=name;
   this.imageSrc=imageS;
   this.price=price;
   this.availability=availability;
   this.rating=rating;
   this.isFavorite=isFavorite;

 }
}

// id: number;
// name: string;
// quantity : number;
// description : string;
// imageSrc: string;
// price: number;
// availability: boolean;
// note: number;
