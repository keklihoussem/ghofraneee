import { HttpClient, HttpRequest, HttpEvent, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cheque } from './cheque';
import { Bordereau } from './bordereau';
import { BanqueDestinataire } from './banque-destinataire';
import { BanqueCouverture } from './banque-couverture';
import { Compte } from './compte';
import { Client } from './client';
import { Agence } from './agence';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
 


  constructor(private http:HttpClient) { 
  }
  
  enregistrer(cheque:Cheque):Observable<any> {
    return this.http.post('http://localhost:8080/saisieTest', cheque);
  }
  
  chequeExist(NumCheque:Number){
    return this.http.get<Number>('http://localhost:8080/ChequeExist/'+NumCheque);
  }

   SaisieCheque(numCheque:Number,montant:Number,devise:String,numBordereau:Number): Observable<any>{
    return this.http.get<Cheque>('http://localhost:8080/saisieCh/'+numCheque+'/'+montant+'/'+devise+'/'+numBordereau);
   }
   
   SaisieCheque2(numCheque:Number,montant:Number,devise:String,numBordereau:Number,file: File): any {
    const formData: FormData = new FormData();
    var headers = new HttpHeaders(
      {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'Accept': '*/*' ,
      'Connection':'keep-alive'     }
    );
    formData.append('file', file);
    

    return this.http.post<Cheque>(`http://localhost:8080/saisieChAvcImg/`+numCheque+`/`+montant+`/`+devise+`/`+numBordereau, formData , {
      reportProgress: true,
      responseType: 'json'
    });


   }

   rechercherCheque(numCheque:Number,numBordereau:Number,numCompte:Number){
    return this.http.get<Cheque>('http://localhost:8080/rechercherCh/'+numCheque+'/'+numBordereau+'/'+numCompte);
   }
   chequeExistant(numCheque:Number){
    return this.http.get<Boolean>('http://localhost:8080/chequeExistant/'+numCheque);
   }
   compteExistant(numCompte:Number){
    return this.http.get<Compte>('http://localhost:8080/CompteExistant/'+numCompte);
   }
   bordreauExistant(numBordereau:Number){
    return this.http.get<Bordereau>('http://localhost:8080/BorExistant/'+numBordereau);
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

rejeteStatut(motif:String,cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/updateRejet/'+motif,cheque);
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

enregistrerCheque(cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/modifierCheque/',cheque);
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

listeAgence(){
  return this.http.get<Agence[]>('http://localhost:8080/afficherAgence');
}
creeClient(nomC:String,prenomC:String,telephone:Number,email:String){
  return this.http.get<Client>('http://localhost:8080/client/'+nomC+'/'+prenomC+'/'+telephone+'/'+email);
}
enregistrerClient(id:Number,client:Client){
  return this.http.put<Client>('http://localhost:8080/modifierClient/'+id,client);
}

private baseUrl = 'http://localhost:8080';

supprimerAgence(agence: Agence): Observable<any> {
  const url = `${this.baseUrl}/supprimerAgence`;
  return this.http.delete(url, { body: agence });
}

creeAgence(nom:String,adresse:String,telephone:Number){
  return this.http.get<Agence>('http://localhost:8080/agence/'+nom+'/'+adresse+'/'+telephone);
}

enregistrerAgence(code:Number,agence:Agence){
  return this.http.put<Agence>('http://localhost:8080/modifierAgence/'+code,agence);
}

listeClient(){
  return this.http.get<Client[]>('http://localhost:8080/afficherClients');
}

supprimerClient(client: Client) {
  const options = {
    body: client
  };
  return this.http.delete('http://localhost:8080/supprimerClient', options);
}



uploadImgCheque(file:File , id:Number)
{
  const formData:FormData = new FormData();
  formData.append('file' , file);
  const req = new HttpRequest(
    'POST',
    'http://localhost:8080/uploadImgCheque/' + id ,
    formData,
    {
      reportProgress: true,
      responseType: 'text',
    }
  );
  return this.http.request(req);
}

creationAgence(code:Number,nom:String,adresse:String,telephone:Number){
  return this.http.get<Agence>('http://localhost:8080/agenceobjet/'+code+'/'+nom+'/'+adresse+'/'+telephone);
}

enregistrerNouveauAgence(code:Number,agence:Agence){
  return this.http.post<Agence>('http://localhost:8080/AjouterAgence/'+code,agence);
}

couleur(){
  return this.http.get<Cheque[]>('http://localhost:8080/nbrjour/');
}
chequelongueur(NumCheque:Number){
  return this.http.get<Number>('http://localhost:8080/longueurCheque/'+NumCheque);
}
  
ReceptionRejet(cheque:Cheque){
  return this.http.put<Cheque>('http://localhost:8080/updateRejetRecu/',cheque);
}

nbrtotchequeser(){
  return this.http.get<Number>('http://localhost:8080/nbrChequeService');
}

nbrtotbordereauser(){
  return this.http.get<Number>('http://localhost:8080/nbrBordereauService');
}

listechequeser(){
  return this.http.get<Bordereau[]>('http://localhost:8080/finJourneeService');
}

nbrchequeparbor(numBordereau:Number){
  return this.http.get<Number>('http://localhost:8080/nombrechequeBor/'+numBordereau);
}




}
