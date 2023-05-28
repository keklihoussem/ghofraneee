import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { ChequeService } from '../cheque.service';
import { Cheque } from '../cheque';
import { Bordereau } from '../bordereau';

@Component({
  selector: 'app-fin-j-service',
  templateUrl: './fin-j-service.component.html',
  styleUrls: ['./fin-j-service.component.css']
})
export class FinJServiceComponent implements OnInit {
  nom!:any;
prenom!:any;
ngOnInit(): void {
this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
  this.FinJournee();
  let data=this.localStore.getData('role');
  if(data=="0"){
    this.router.navigate(["/"]);
  }else if(data=="1"){
    this.router.navigate(["/agence"]);
  }else if(data=="2"){
    this.router.navigate(["/finjservice"]);
  }else if(data=="3"){
    this.router.navigate(["/administrateur"]);
  }else{
    this.router.navigate(["/client"]);
  }
}
 

  constructor(private router:Router,private localStore:LocalService,private us: ChequeService){}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

  Deconnexion(){
      this.localStore.saveData('role',"0");
      location.reload();
  }

  printPage() {
    window.print();
  }
  
  listeB!:Bordereau[];
  nombreB!:Number;
  nombreC!:Number;

  FinJournee() {
    this.us.listechequeser().subscribe((bordereaux: Bordereau[]) => {
      console.log("1");
      this.listeB = bordereaux;
      this.us.nbrtotbordereauser().subscribe((nbrB:Number) => {
        console.log("2");
        this.nombreB = nbrB;
        console.log(nbrB);
        console.log(this.nombreB);
        this.us.nbrtotchequeser().subscribe((nbrC:Number) => {
          console.log("3");
          this.nombreC = nbrC;
          console.log(nbrC);
          console.log(this.nombreC);
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
    });
  }


}
