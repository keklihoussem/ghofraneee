import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-cheque-rejete',
  templateUrl: './cheque-rejete.component.html',
  styleUrls: ['./cheque-rejete.component.css']
})
export class ChequeRejeteComponent implements OnInit{
  nom!:any;
prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
    this.listeRejeter();
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/rejete"]);
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
  liste!:Cheque[];
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}
  listeRejeter(){
    this.us.listeRejete().subscribe(
      (cheques: Cheque[]) => {
        this.liste = cheques;
        console.log(cheques);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Reception(cheque:Cheque){
    this.us.ReceptionRejet(cheque).subscribe(
      (chequee: Cheque) => {
        console.log(chequee);
        alert("cheque rejeté reçu");
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }


  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
