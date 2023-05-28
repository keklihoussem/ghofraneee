import { Component, OnInit } from '@angular/core';
import { ChequeService } from 'src/app/cheque.service';
import { Bordereau } from '../bordereau';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-fin-j',
  templateUrl: './fin-j.component.html',
  styleUrls: ['./fin-j.component.css']
})
export class FinJComponent implements OnInit{
  constructor(private us: ChequeService,private router:Router,private localStore:LocalService){}
  listeB!:Bordereau[];
  nombreB!:Number;
  nombreC!:Number;
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
        this.router.navigate(["/fin"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }

  printPage() {
    window.print();
  }
  
  FinJournee() {
    this.us.FinJournee().subscribe((bordereaux: Bordereau[]) => {
      console.log("1");
      this.listeB = bordereaux;
      this.us.nbrBordereau().subscribe((nbrB:Number) => {
        console.log("2");
        this.nombreB = nbrB;
        console.log(nbrB);
        console.log(this.nombreB);
        this.us.nbrCheques().subscribe((nbrC:Number) => {
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
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
