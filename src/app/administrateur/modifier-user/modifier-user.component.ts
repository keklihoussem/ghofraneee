import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';
import { User } from 'src/app/user';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit{
  user!:User; 
  ngOnInit(): void {
    this.user = history.state.user;
    console.log(this.user);
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/encaissement"]);
    }else if(data=="3"){
      this.router.navigate(["/modifier-user"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  constructor(private us:UserserviceService,private router:Router,private localStore:LocalService){}

  pwd!:String;
  nom!:String;
  prenom!:String;
  email!:String;
  telephone!:Number;

  modifierUser() {
    var password = this.pwd;
    var name = this.nom;
    var surname = this.prenom;
    var mail = this.email;
    var phone = this.telephone;

    this.localStore.saveData('role',"3");

    this.us.creeUser(password,name,surname,mail,phone).subscribe((userr:User) => {
        this.us.enregistrerUser(this.user.matricule,userr).subscribe((user:User) => {
          alert("user modifié.");
          this.router.navigate(["/user"]);
        });
      
    });
  }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
