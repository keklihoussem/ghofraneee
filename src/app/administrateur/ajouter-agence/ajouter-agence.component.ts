import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/agence';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-ajouter-agence',
  templateUrl: './ajouter-agence.component.html',
  styleUrls: ['./ajouter-agence.component.css']
})
export class AjouterAgenceComponent implements OnInit {
  nom!:any;
  prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/encaissement"]);
    }else if(data=="3"){
      this.router.navigate(["/ajouterAgence"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}
  
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  codeAgence!:Number;
  nomAgence!:String;
  adresse!:String;
  Telephone!:Number;

  ajouterAgence() {
    const codeA = this.codeAgence;
    const nomA = this.nomAgence;
    const Adresse=this.adresse;
    const tel=this.Telephone;
    this.localStore.saveData('role',"3");
    this.us.creationAgence(codeA,nomA,Adresse,tel).subscribe((agence:Agence) => {
        this.us.enregistrerNouveauAgence(codeA,agence).subscribe((agencee:Agence) => {
          if(agencee==null){
            alert("agence de code"+codeA+"exist");
          }else{
          alert("agence ajoutée.");
          this.router.navigate(["/agences"]);}
        });
    });
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
