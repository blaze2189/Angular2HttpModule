import { Component, OnInit } from '@angular/core';
import {RestBankService} from '../../services/restbank.service';
import {Bank} from '../../modules/bank.module';
import {Address} from '../../modules/address.module';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-bankcomponent',
  templateUrl: './bankcomponent.component.html',
  styleUrls: ['./bankcomponent.component.css']
})
export class BankComponent implements OnInit {

  private banks:Bank[];
  private bank:Bank;
  private buttonUpdate:boolean;
  private buttonAdd:boolean;

  constructor(private restBankService:RestBankService,
  //private activatedRoute: ActivatedRoute
  ) {
    console.log('some');
    this.bank = new Bank();
    this.bank.setAddress(new Address());
    this.buttonUpdate=false;
    this.buttonAdd=true;
  }

  ngOnInit() {
    console.log('init');
    /*this.activatedRoute.params.subscribe((params: Params) => {
       let userId = params['user'];
       console.log(userId);
     });*/

    this.restBankService.getAllBanks().subscribe(p=>this.banks=p,e=>console.log('error'));
    console.log(this.banks);
  }

  consulta(){
    let answer;
    this.restBankService.getAllBanks().subscribe(p=>console.log(p),e=>console.log(e));
    console.log(answer);
  }

  add(){
    this.restBankService.sendPost(this.bank)
      .subscribe(p=>{console.log('success');
      this.banks.push(this.bank);
    this.clean();
    },e=>console.log('error'));

  }

  private clean(){
    this.bank=new Bank();
    this.bank.setAddress(new Address());
    this.bank.setCodeSucursal("");
    this.bank.setNameSucursal("");
  }

  remove(codeBank:string,index:number){
    console.log('to delete bank with code '+codeBank);
      this.restBankService.sendDelete(codeBank).
      subscribe(c=>{console.log("deleted");
                    this.banks=this.banks.slice(index,1);
                  console.log(this.banks)},
                e=>console.log(e));
                ;
  }

  update(){
    this.restBankService.sendUpdate(this.bank)
    .subscribe(c=>{console.log('updated');
                    //this.consulta()
                  },
                  e=>{console.log('error')})
      this.clean();
      this.buttonAdd=true;
      this.buttonUpdate=false;
  }

  toUpdate(index:number){
    this.bank=this.banks[index];
    this.buttonAdd=false;
    this.buttonUpdate=true;
  }

  print(){
    console.log(this.banks);
  }

}
