import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agence } from 'src/app/agence';
import { Client } from 'src/app/client';
import { Compte } from 'src/app/compte';
import { LocalService } from 'src/app/local.service';
import { Role } from 'src/app/role';
import { User } from 'src/app/user';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit{
  nom1!:any;
  prenom1!:any;
  ngOnInit(): void {
    this.nom1=this.localStore.getData('nom');
    this.prenom1=this.localStore.getData('prenom');
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/encaissement"]);
    }else if(data=="3"){
      this.router.navigate(["/ajouteruser"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }
  selectedOption: string;
  matricule!:Number;
  codeAgence!:Number;
  nomAgence!:String;
  numClient!:Number;
  pwd!:String;
  nom!:String;
  prenom!:String;
  role!:Role;
  email!:String;
  numtel!:String;
  numCompte!:Number;
  rib!:Number;
  
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  constructor(private us: UserserviceService, private router :Router,private localStore:LocalService){
    this.selectedOption = ''; // initialisation avec la valeur 'client'
  }
  

  enregister() {
    const matricule = this.matricule;
    const pwd = this.pwd;
    const nom = this.nom;
    const prenom = this.prenom;
    const role = this.role;
    const email = this.email;
    const Numtel = this.numtel;
    const numC = this.numCompte;
    const Rib = this.rib;
    const codeagence = this.codeAgence;
    const numclient = this.numClient;
  
    this.localStore.saveData('role', "3");
  
    this.us.rechercherUser(matricule).subscribe((test: Boolean) => {
      if (test === true) {
        alert("l'utilisateur de numéro " + matricule + " existe");
      } else {
        this.us.creerUser(matricule, pwd, nom, prenom, email, Numtel, role).subscribe(
          (user: User) => {
            this.us.enregistrerUser(codeagence, user).subscribe(
              (usr: User) => {
                if (usr == null) {
                  alert("agence introuvable");
                } else {
                  console.log('User successfully registered: ', usr);
                  alert("l'utilisateur est ajouté avec succès");
                  if (usr.role === Role.Client) {
                    this.us.rechercherClient(numclient).subscribe((test1: Boolean) => {
                      if (test1 === true) {
                        alert("le client de numéro " + numclient + " existe");
                      } else {
                        this.us.rechercherCompte(numC).subscribe((test2: Boolean) => {
                          if (test2 === true) {
                            alert("le compte de numéro " + numC + " existe");
                          } else {
                            this.us.relierclient(numclient, usr).subscribe(
                              (client: Client) => {
                                console.log('Client successfully registered: ', client);
                                alert("client est ajouté avec succès");
                                this.us.compte(numC, Rib).subscribe((compte: Compte) => {
                                  this.us.compteSave(compte).subscribe((c: Compte) => {
                                    alert("compte enregistré");
                                    this.us.reliercompte(matricule, c).subscribe((co: Compte) => {
                                      console.log("compte relié");
                                      this.router.navigate(["/user"]);
                                    },
                                      (error: any) => {
                                        console.error('Error occurred while registering user: ', error);
                                      }
                                    );
                                  },
                                    (error: any) => {
                                      console.error('Error occurred while registering user: ', error);
                                    }
                                  );
                                },
                                  (error: any) => {
                                    console.error('Error occurred while registering user: ', error);
                                  }
                                );
                              },
                              (error: any) => {
                                console.error('Error occurred while registering client: ', error);
                              }
                            );
                          }
                        });
                      }
                    });
                  }else{
                    this.router.navigate(["/user"]);
                  }
                }
              },
              (error: any) => {
                console.error('Error occurred while creating user: ', error);
              }
            );
          },
          (error: any) => {
            console.error('Error occurred while registering user: ', error);
          }
        );
      }
    });
  }
  
  
  
  
  
  
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

}
