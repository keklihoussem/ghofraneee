import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from 'src/app/cheque.service';
import { Cheque } from '../cheque';
import { Compte } from '../compte';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-recherche-o',
  templateUrl: './recherche-o.component.html',
  styleUrls: ['./recherche-o.component.css']
})
export class RechercheOComponent implements OnInit{
ngOnInit(): void {
  let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/recherche"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }

}
Deconnexion(){
  this.localStore.saveData('role',"0");
  location.reload();
}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  
  constructor(private us: ChequeService, private router :Router,private localStore:LocalService){}
  numCheque!:Number;
  numBordereau!:Number;
  numCompte!:Number;
  checkInfo!: Cheque;
  compte!:Compte;

  


  rechercher() {
    var numCh = this.numCheque;
    var numBor = this.numBordereau;
    var numCo = this.numCompte;
    this.us.chequeExistant(numCh).subscribe((test:Boolean) => {
      console.log(test);
      if (test == false) {
        alert("Numero de chèque introuvable");
      } else {
        this.us.bordreauExistant(numBor).subscribe(res => {
          if (res == null) {
            alert("Numero de bordereau introuvable");
          } else {
            this.us.compteExistant(numCo).subscribe(res => {
              if (res == null) {
                alert("Numero de compte introuvable");
              } else {
                this.compte=res;
                this.us.rechercherCheque(numCh, numBor, numCo).subscribe((cheque: Cheque) => {
                  console.log("Hi");
                  console.log(cheque);
                  this.checkInfo = cheque;
                });
              }
            }, (error) => {
              console.log(error);
            });
          }
        });
      }
    });
  }
  

    imprimer(){
      this.router.navigate(["/imprimer"], { state: { data: this.checkInfo }});
    }
    
  
  
}
