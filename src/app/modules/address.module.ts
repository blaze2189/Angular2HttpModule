export class Address{


private  street:string;
private  colony:string;
private  municipality:string;
private  numberBank:number;
private  zipCode:string;

public getNumber(){
  return this.numberBank;
}

public setNumberBank(number:number){
  this.numberBank=number
}

}
