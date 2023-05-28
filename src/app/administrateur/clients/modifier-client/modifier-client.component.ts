import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from 'src/app/cheque.service';
import { Client } from 'src/app/client';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit{
  client!:Client;
  nom!:any;
  prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
    this.client = history.state.client;
    console.log(this.client);
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/encaissement"]);
    }else if(data=="3"){
      this.router.navigate(["/modifier-client"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }

  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}

  nomClient!:String;
  prenomClient!:String;
  numeroTelephone!:Number;
  mailClient!:String;
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }

  modifierClient() {
    var nomC = this.nomClient;
    var prenomC = this.prenomClient;
    var numT = this.numeroTelephone;
    var email = this.mailClient;
    this.us.creeClient(nomC,prenomC,numT,email).subscribe((Client:Client) => {
        this.us.enregistrerClient(this.client.id,Client).subscribe((Cli:Client) => {
          alert("client modifié.");
          this.router.navigate(["/clients"]);
        });
      
    });
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
