import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/agence';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit{
  nom!:any;
  prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
    this.listetoutAgences();
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/agence"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/agences"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }
  
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }

  [x: string]: any;
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}
  liste!:Agence[];

  listetoutAgences() {
    this.us.listeAgence().subscribe(
      (agences: Agence[]) => {
        this.localStore.saveData('role',"3");
        this.liste = agences;
      },
      (error) => {
        console.log(error);
      }
    );
  }

SupprimerAgence(agence:Agence) {
  this.localStore.saveData('role',"3");
  console.log(agence);
  this.us.supprimerAgence(agence).subscribe(
  () => {
  alert("agence supprimé");
  location.reload();
  },
  (error) => {
  console.log(error);
  }
  );
  }

  ajouter(){
    this.localStore.saveData('role',"3");
    this.router.navigate(["/ajouterAgence"]);
  }

  Modifier(agence:Agence){
    this.localStore.saveData('role',"3");
    this.router.navigate(["/modifier-agence"],  { state: { agence } });
   }
   status: boolean = false;
   clickEvent(){
       this.status = !this.status; }
}

