import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Client } from '../client';
import { Compte } from '../compte';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
 
      
  user!:User;
  client!:Client;
  co!:Compte;
  nom!:any;
  prenom!:any;

  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
      this.user = history.state.user;
      console.log(this.user);
      this.ClientUser();  
      let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/agence"]);
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
    constructor(private us: UserserviceService, private router :Router,private localStore: LocalService){}

    ClientUser(){
      var matricule=this.user.matricule;
      this.us.retournerClient(matricule).subscribe((clientt:Client)=>{
        console.log(clientt);
        this.client=clientt;
        this.us.trouverCompte(clientt.id).subscribe((compte:Compte)=>{
          this.co=compte;
        });
      });
    }
    status: boolean = false;
    clickEvent(){
        this.status = !this.status; }
}
