import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueCouverture } from 'src/app/banque-couverture';
import { BanqueDestinataire } from 'src/app/banque-destinataire';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';
import { Client } from 'src/app/client';
import { Compte } from 'src/app/compte';
import * as $ from 'jquery';
import 'bootstrap'
import { LocalService } from 'src/app/local.service';


@Component({
  selector: 'app-ouverture',
  templateUrl: './ouverture.component.html',
  styleUrls: ['./ouverture.component.css']
})
export class OuvertureComponent implements AfterViewInit,OnInit{
  cheque!:Cheque;
  nom!:any;
prenom!:any;
  ngAfterViewInit() {
    const banqueForm = document.getElementById('banque-form') as HTMLElement;
    const creditForm = document.getElementById('credit-form') as HTMLElement;
    const encaissementForm = document.getElementById('encaissement-form') as HTMLElement;
    
  }

  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
    this.cheque = history.state.cheque;
    $(document).ready(function() {
      $('#exampleModal').on('show.bs.modal', function () {
        // Code à exécuter lorsque le modal s'affiche
      });
    });
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/ouverture"]);
    }else if(data=="3"){
      this.router.navigate(["/administrateur"]);
    }else{
      this.router.navigate(["/client"]);
    }
  
  }
  ouvrirModal() {
    $('#exampleModal').modal('show');
  }

  

  closeModal(){
    $('#exampleModal').modal('hide');
  }
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}

  handleRadioChange(event: any) {
    const value = event.target.value;
    const banqueForm = document.querySelector('#banque-form') as HTMLElement;
const creditForm = document.querySelector('#credit-form') as HTMLElement;
const encaissementForm = document.querySelector('#encaissement-form') as HTMLElement;

    
    if (banqueForm) {
      banqueForm.style.display = value === 'banque' ? 'block' : 'none';
    }
    if (creditForm) {
      creditForm.style.display = value === 'credit' ? 'block' : 'none';
    }
    if (encaissementForm) {
      encaissementForm.style.display = value === 'encaissement' ? 'block' : 'none';
    }
  }
  numeroCompte!:Number;
  nomClient!:String;
  codeBanque!:Number;
  nomBanque!:String;
  codeSwift!:String;
  codePays!:Number;
  tireur!:String;
  Tireur!:String;
  motif!:String;
  montant!:Number;
  devise!:String;
  numCheque!:Number;

  rejeter(cheque:Cheque){
    const motifRejet=this.motif;
    this.us.rejeteStatut(motifRejet,cheque).subscribe((ch: Cheque) => {
      console.log(ch);
      alert("chèque rejeté");
      this.router.navigate(["/service"]);
     }, (error) => {
    console.log(error);
  });
  }

  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  
  modifierCheque() {
    
  }

  BanqueTunisienne() {
    var numCo = this.numeroCompte;
    var nomC = this.nomClient;
    var codeB = this.codeBanque;
    var nomB = this.nomBanque;
    var swift = this.codeSwift;
    var numCh = this.cheque.numCheque;
    var tireurr=this.tireur;
    const numch = this.numCheque;
    const montant = this.montant;
    const devise = this.devise;

    this.us.chequemodifier(numch, devise, montant).subscribe((ch: Cheque) => {
      if (ch === null) {
        alert("Le numéro de chèque doit avoir 7 caractères.");
      } else {
        this.us.enregistrerCheque(ch).subscribe((Ch: Cheque) => {
          alert("Chèque modifié.");
        });
      }
    });
    this.us.CreeClient(nomC,numCo).subscribe((client: Client) => {
      console.log(client);
      this.us.ChequeClient(numCh,client).subscribe((savedClient: Client) => {
        console.log(savedClient);
        this.us.CreeCompte(numCo).subscribe((compte: Compte) => {
          console.log(compte);
          this.us.ChequeCompte(numCh,compte).subscribe((savedCompte: Compte) => {
            console.log(savedCompte);
            this.us.CreeBanque(codeB,nomB,swift,tireurr).subscribe((banque: BanqueDestinataire) => {
              console.log(banque);
              this.us.ChequeBanque(numCh,banque).subscribe((savedBanque: BanqueDestinataire) => {
                console.log(savedBanque);
                alert("Remise créée");
                this.router.navigate(["/service"]);
              });
            });
          });
        });
      });
    });
  
  }

  BanqueEtranger(){
    var numCo = this.numeroCompte;
    var nomC = this.nomClient;
    var codeB = this.codeBanque;
    var codeP = this.codePays;
    var swift = this.codeSwift;
    var numCh = this.cheque.numCheque;
    var Tireurr=this.Tireur;
  
    this.us.CreeClient(nomC,numCo).subscribe((client: Client) => {
      console.log(client);
      this.us.ChequeClient(numCh,client).subscribe((savedClient: Client) => {
        console.log(savedClient);
        this.us.CreeCompte(numCo).subscribe((compte: Compte) => {
          console.log(compte);
          this.us.ChequeCompte(numCh,compte).subscribe((savedCompte: Compte) => {
            console.log(savedCompte);
            this.us.CreeBanquecredit(codeB,codeP,swift,Tireurr).subscribe((banque: BanqueDestinataire) => {
              console.log(banque);
              this.us.ChequeBanque(numCh,banque).subscribe((savedBanque: BanqueDestinataire) => {
                console.log(savedBanque);
                alert("Remise créée");
                this.router.navigate(["/service"]);
              });
            });
          });
        });
      });
    });
  }

  nomtireur!:String;
  numCompte!:Number;
  nomclient!:String;
  codeBanqueD!:Number;
  nomBanqueD!:String;
  swiftD!:String;
  adresse!:String;
  codeBanqueC!:Number;
  nomBanqueC!:String;
  swiftC!:String;

  BanqueEtrangerEnc(){
    var tireur=this.nomtireur;
    var numCo = this.numCompte;
    var nomC = this.nomclient;
    var codeBd = this.codeBanqueD;
    var nomBd=this.nomBanqueD;
    var swiftD = this.swiftD;
    var adresse=this.adresse;
    var codeBc = this.codeBanqueC;
    var nomBc=this.nomBanqueC;
    var swiftC = this.swiftC;
    var numCh = this.cheque.numCheque;
  
    this.us.CreeClient(nomC,numCo).subscribe((client: Client) => {
      console.log(client);
      this.us.ChequeClient(numCh,client).subscribe((savedClient: Client) => {
        console.log(savedClient);
        this.us.CreeCompte(numCo).subscribe((compte: Compte) => {
          console.log(compte);
          this.us.ChequeCompte(numCh,compte).subscribe((savedCompte: Compte) => {
            console.log(savedCompte);
            this.us.CreeBanqueCouverture(codeBc,nomBc,swiftC).subscribe((banqueC: BanqueCouverture) => {
              console.log(banqueC);
              this.us.ChequeBanqueC(numCh,banqueC).subscribe((savedBanqueC: BanqueCouverture) => {
                console.log(savedBanqueC);
                this.us.CreeBanqueDestinataire(codeBd,nomBd,swiftD,tireur,adresse).subscribe((banqueD: BanqueDestinataire) => {
                  console.log(banqueD);
                  this.us.ChequeBanqueD(numCh,banqueD).subscribe((savedBanqueD: BanqueDestinataire) => {
                    console.log(savedBanqueD);
                    alert("Remise créée");
                    this.router.navigate(["/service"]);
                  });
                });
              });
            });
          });
        });
      });
    });
  
  
}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
