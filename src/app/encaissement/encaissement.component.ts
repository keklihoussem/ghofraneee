import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { User } from '../user';

@Component({
  selector: 'app-encaissement',
  templateUrl: './encaissement.component.html',
  styleUrls: ['./encaissement.component.css']
})
export class EncaissementComponent implements OnInit{
  nom!:any;
  prenom!:any;
user!:User;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
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

  constructor(private router:Router,private localStore:LocalService){}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

      Deconnexion(){
        this.localStore.saveData('role',"0");
        location.reload();
      }

}
