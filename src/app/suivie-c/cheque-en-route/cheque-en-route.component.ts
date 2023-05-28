import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';


@Component({
  selector: 'app-cheque-en-route',
  templateUrl: './cheque-en-route.component.html',
  styleUrls: ['./cheque-en-route.component.css']
})
export class ChequeEnRouteComponent implements OnInit {
  nom!:any;
prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
   this.prenom=this.localStore.getData('prenom');
  this.couleur();
  let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/en-route"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
    
  }

  constructor( private router :Router,private us:ChequeService,private localStore:LocalService){}
   liste!:Cheque[];
   //colorMap: { [key: string]: string } = {};


couleur() {
  this.us.couleur().subscribe(
    (listee:Cheque[]) => {
    this.liste=listee;
    },
    (error) => {
      console.log('Error:', error);
    }
  );
}

Deconnexion(){
  this.localStore.saveData('role',"0");
  location.reload();
}

status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
