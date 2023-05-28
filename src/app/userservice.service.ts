import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Compte } from './compte';
import { Client } from './client';
import { User } from './user';
import { Agence } from './agence';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { 
  }
  getUserData(matricule: Number,pwd: String){
    return this.http.get<User>('http://localhost:8080/login/'+matricule+'/'+pwd);
  }
  Iden(matricule: Number,pwd: String){
    return this.http.get<Number>('http://localhost:8080/iden/'+matricule+'/'+pwd);
  }
  retournerClient(matricule:Number)  {
    return this.http.get<Client>('http://localhost:8080/retournerClient/'+matricule);
  }
  
  afficherUsers(){
    return this.http.get<User[]>('http://localhost:8080/afficherUsers/');
  }
  supprimerUser(user: User) {
    const options = {
      body: user
    };
    return this.http.delete('http://localhost:8080/supprimerUser', options);
  }

  creerUser(matricule:Number,pwd:String,nom:String,prenom:String,email:String,numtel:String,role:String){
    return this.http.get<User>('http://localhost:8080/creeUser/'+matricule+'/'+pwd+'/'+nom+'/'+prenom+'/'+email+'/'+numtel+'/'+role);
  }

  enregistrerUser(codeAgence:Number,user:User){
    return this.http.post<User>('http://localhost:8080/enregistrerUser/'+codeAgence,user);
  }

  relierclient(numClient:Number,user:User){
    return this.http.post<Client>('http://localhost:8080/UserClient/'+numClient,user);
  }

  compte(numCompte:Number,rib:Number){
    return this.http.get<Compte>('http://localhost:8080/compte/'+numCompte+'/'+rib);
  }

  compteSave(compte:Compte){
    return this.http.post<Compte>('http://localhost:8080/enregistrerCompte/',compte);
  }

  reliercompte(matricule:Number,compte:Compte){
    return this.http.put<Compte>('http://localhost:8080/relierCompteClient/'+matricule,compte);
  }

  trouverCompte(numClient:Number){
    return this.http.get<Compte>('http://localhost:8080/retournerCompte/'+numClient);
  }

  
  creeAgence(codeAgence:Number,nomAgence:String,adresse:String,telephone:Number){
    return this.http.get<Agence>('http://localhost:8080/creeAgence/'+codeAgence+'/'+nomAgence+'/'+adresse+'/'+telephone);
  }

  enregistrerAgence(agence:Agence){
    return this.http.post<Agence>('http://localhost:8080/enregistrerAgence/',agence);
  }
  

  creeUser(pwd:String,nom:String,prenom:String,email:String,telephone:Number){
    return this.http.get<User>('http://localhost:8080/Usermodif/'+pwd+'/'+nom+'/'+prenom+'/'+email+'/'+telephone);
  }

  modifierUser(matricule:Number,user:User){
    return this.http.put<User>('http://localhost:8080/enregistrerModif/'+matricule,user);
  }

  rechercherClient(numClient:Number){
    return this.http.get<Boolean>('http://localhost:8080/client/'+numClient);
  }

  rechercherCompte(numCompte:Number){
    return this.http.get<Boolean>('http://localhost:8080/compte/'+numCompte);
  }

  rechercherUser(matricule:Number){
    return this.http.get<Boolean>('http://localhost:8080/user/'+matricule);
  }
  
  
  
}
