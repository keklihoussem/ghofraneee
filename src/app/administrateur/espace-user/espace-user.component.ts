import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { LocalService } from 'src/app/local.service';
import { User } from 'src/app/user';


import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.css']
})
export class EspaceUserComponent implements OnInit{
  nom!:any;
  prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
    this.afficherUsers();
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/encaissement"]);
    }else if(data=="3"){
      this.router.navigate(["/user"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }
  
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }

  liste!:User[];
  constructor(private us:UserserviceService,private router:Router,private localStore:LocalService){}
 
  afficherUsers() {
    this.us.afficherUsers().subscribe(
      (users:User[]) => {
        this.localStore.saveData('role',"3");
        this.liste = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

Supprimer(user:User): void {
  this.us.supprimerUser(user).subscribe(
  () => {
  alert("user est supprimé");
  location.reload();
  },
  (error) => {
  console.log(error);
  }
  );
  }

  Modifier(cheque:Cheque){
    this.router.navigate(["/modifier"],  { state: { cheque } });
   }


ajouter(){
  this.router.navigate(["/ajouteruser"]);
}
status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

}
