import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit{
  user!:User;
  nom!:any;
  prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    console.log(this.nom);
    this.prenom=this.localStore.getData('prenom');
    console.log(this.prenom);
    this.user = history.state.user;
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
 constructor(private localStore:LocalService, private router :Router){}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  
}
