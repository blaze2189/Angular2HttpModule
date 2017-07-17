import {Address} from './address.module'

export class Bank{

  private  codeSucursal:string;
  private  nameSucursal:string;
  private  address:Address;

  public setCodeSucursal(codeSucursal:string){
    this.codeSucursal=codeSucursal;
  }

  public setNameSucursal(nameSucursal:string){
    this.nameSucursal=nameSucursal;
  }

  public setAddress(address:Address){
    this.address=address;
  }

  public getCodeSucursal(){
    return this.codeSucursal;
  }

  public getNameSucursal(){
    return this.nameSucursal;
  }

  public getAddress(){
    return this.address;
  }
}
