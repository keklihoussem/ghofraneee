import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from 'src/app/cheque.service';
import { Client } from 'src/app/client';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
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
      this.router.navigate(["/clients"]);
    }else{
      this.router.navigate(["/client"]);
    }
    this.listetoutClient();
  }
  
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}
  liste!:Client[];

  listetoutClient() {
    this.us.listeClient().subscribe(
      (clients: Client[]) => {
        this.liste = clients;
      },
      (error) => {
        console.log(error);
      }
    );
  }

SupprimerClient(client:Client) {
  this.us.supprimerClient(client).subscribe(
  () => {
  alert("client supprimé");
  location.reload();
  },
  (error) => {
  console.log(error);
  }
  );
  }

  Modifier(client:Client){
   this.router.navigate(["/modifier-client"],  { state: { client } });
   }
   status: boolean = false;
   clickEvent(){
       this.status = !this.status; }
}
