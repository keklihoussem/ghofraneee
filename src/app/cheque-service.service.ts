import { Injectable } from '@angular/core';
import { BanqueDestinataire } from './banque-destinataire';
import { BanqueCouverture } from './banque-couverture';
import { Cheque } from './cheque';
import { Compte } from './compte';
import { Client } from './client';
import { Bordereau } from './bordereau';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChequeServiceService {

  
  constructor(private http:HttpClient) { 
  }
  enregistrer(cheque:Cheque) {
    return this.http.post('http://localhost:8080/saisieTest', cheque);
  }
  
  chequeExist(NumCheque:Number){
    return this.http.get<Number>('http://localhost:8080/ChequeExist/'+NumCheque);
  }

   SaisieCheque(numCheque:Number,montant:Number,devise:String,numBordereau:Number){
    return this.http.get<Cheque>('http://localhost:8080/saisieCh/'+numCheque+'/'+montant+'/'+devise+'/'+numBordereau);
   }

   rechercherCheque(numCheque:Number){
    return this.http.get<Cheque>('http://localhost:8080/rechercherCh/'+numCheque);
   }
   chequeExistant(numCheque:Number){
    return this.http.get<Boolean>('http://localhost:8080/chequeExistant/'+numCheque);
   }
   FinJournee(){
    return this.http.get<Bordereau[]>('http://localhost:8080/finJournee/');
   }
   nbrCheques(){
    return this.http.get<Number>('http://localhost:8080/nbrCheques/');
   }
   nbrBordereau(){
    return this.http.get<Number>('http://localhost:8080/nbrBordereau/');
   }
   listeDesCheques(){
    return this.http.get<Cheque[]>('http://localhost:8080/listeCheques/');
   }

   modifiercheque(cheque:Cheque){
   return this.http.post('http://localhost:8080/saisieTest',cheque);
}

recuStatut(cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/updateRecu',cheque);
}

listeRecu(){
  return this.http.get<Cheque[]>('http://localhost:8080/afficherListeRecu');
}

rejeteStatut(cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/updateRejet',cheque);
}

listeRejete(){
  return this.http.get<Cheque[]>('http://localhost:8080/afficherListeRejete');
}

nouveauCheque(nomClient:String,numCompte:Number,codeBanque:Number,nomBanque:String,codeSwift:Number){
  return this.http.get<Cheque>('http://localhost:8080/chequeUpdate/'+nomClient+'/'+numCompte+'/'+codeBanque+'/'+nomBanque+'/'+codeSwift);
}

updateCheque(numCheque:Number,cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/update/'+numCheque,cheque);
}

listetoutcheques(){
  return this.http.get<Cheque[]>('http://localhost:8080/affichertoutcheques');
}

supprimer(cheque: Cheque) {
  const options = {
    body: cheque
  };
  return this.http.delete('http://localhost:8080/supprimer', options);
}

chequemodifier(numCheque:Number,devise:String,montant:Number){
  return this.http.get<Cheque>('http://localhost:8080/cheque/'+numCheque+'/'+devise+'/'+montant);
}

enregistrerCheque(numCheque:Number,cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/modifierCheque/'+numCheque,cheque);
}

CreeClient(nomClient:String,numCompte:Number){
  return this.http.get<Client>('http://localhost:8080/creeClient/'+nomClient+'/'+numCompte);
}

CreeCompte(numCompte:Number){
  return this.http.get<Compte>('http://localhost:8080/creeCompte/'+numCompte);
}

CreeBanque(codeBanque:Number,nomBanque:String,codeSwift:String,nomTireur:String){
  return this.http.get<BanqueDestinataire>('http://localhost:8080/creeBanqueTunisie/'+codeBanque+'/'+nomBanque+'/'+codeSwift+'/'+nomTireur);
}

CreeBanquecredit(codeBanque:Number,codePays:Number,codeSwift:String,nomTireur:String){
  return this.http.get<BanqueDestinataire>('http://localhost:8080/creeBanqueCredit/'+codeBanque+'/'+codePays+'/'+codeSwift+'/'+nomTireur);
}

ChequeClient(numCheque:Number,client:Client){
  return this.http.put<Client>('http://localhost:8080/creationClient/'+numCheque,client);
}

ChequeCompte(numCheque:Number,compte:Compte){
  return this.http.put<Compte>('http://localhost:8080/creationCompte/'+numCheque,compte);
}

ChequeBanque(numCheque:Number,banque:BanqueDestinataire){
  return this.http.put<BanqueDestinataire>('http://localhost:8080/creationBanque/'+numCheque,banque);
}

listeTraite(){
  return this.http.get<Cheque[]>('http://localhost:8080/afficherListeTraite');
}

CreeBanqueCouverture(codeBanque:Number,nomBanque:String,codeSwift:String){
  return this.http.get<BanqueCouverture>('http://localhost:8080/creeBanqueCouverture/'+codeBanque+'/'+nomBanque+'/'+codeSwift);
}

CreeBanqueDestinataire(codeBanque:Number,nomBanque:String,codeSwift:String,nomTireur:String,adresse:String){
  return this.http.get<BanqueDestinataire>('http://localhost:8080/creeBanqueDestinataire/'+codeBanque+'/'+nomBanque+'/'+codeSwift+'/'+nomTireur+'/'+adresse);
}

ChequeBanqueC(numCheque:Number,banque:BanqueCouverture){
  return this.http.put<BanqueCouverture>('http://localhost:8080/creationBanqueCouverture/'+numCheque,banque);
}

ChequeBanqueD(numCheque:Number,banque:BanqueDestinataire){
  return this.http.put<BanqueDestinataire>('http://localhost:8080/creationBanqueDestinataire/'+numCheque,banque);
}
  

}
