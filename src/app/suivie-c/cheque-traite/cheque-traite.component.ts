import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-cheque-traite',
  templateUrl: './cheque-traite.component.html',
  styleUrls: ['./cheque-traite.component.css']
})
export class ChequeTraiteComponent implements OnInit{
  nom!:any;
prenom!:any;

  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
    this.ListeTraite();
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/traite"]);
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
  ListeTraite() {
    this.us.listeTraite().subscribe(
      (cheques: Cheque[]) => {
        this.liste = cheques;
        console.log(cheques);
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
