import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Role } from '../role';
import { LocalService } from '../local.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  Matricule!: Number;
  password!:String;
  r!: Role;
  nom!:String;


  constructor(private us: UserserviceService, private router :Router,private localStore: LocalService){}

  test!:String;
  ngOnInit(): void {
    this.localStore.clearData();
    this.localStore.saveData('role',"0");
  }

  LoginU(){
    var mat=this.Matricule;
    var pwd=this.password;
    this.us.getUserData(mat, pwd).subscribe((user: { role: string ,nom:any,prenom:any}) =>{
      this.localStore.saveData('nom',user.nom);
      this.localStore.saveData('prenom',user.prenom);
      console.log("user"+user.nom);
      if(user.role === Role.Client.toString()) {
        this.router.navigate(["/client"],  { state: { user } });
        this.localStore.saveData('role',"4");
        console.log(this.localStore.getData('role'));
      } else if(user.role === Role.Agence.toString()) {
        this.router.navigate(["/agence"],  { state: { user } });
        this.localStore.saveData('role',"1");
       
      } else if(user.role === Role.ServiceEncaissement.toString()) {
        this.router.navigate(["/encaissement"],  { state: { user } });
        this.localStore.saveData('role',"2");
      } else if(user.role === Role.Administrateur.toString()) {
        this.router.navigate(["/administrateur"],  { state: { user } });
        this.localStore.saveData('role',"3");
      }
    }, (error) => {
      console.log(error);
    });
  }

  identifier(){
    var mat=this.Matricule;
    var pwd=this.password;
    this.us.Iden(mat,pwd).subscribe((t: Number) =>{
      if(t==1) {
        alert("mot de passe incorrect");
      } else if(t==2) {
        alert("matricule incorrect");
      }
    }, (error) => {
      console.log(error);
    });

  }

  
  

}
