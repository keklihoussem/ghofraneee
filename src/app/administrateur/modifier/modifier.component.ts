import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit{
  cheque!:Cheque; 
  ngOnInit(): void {
    this.cheque = history.state.cheque;
    console.log(this.cheque);
  }

  constructor(private us:ChequeService,private router:Router){}

  
  numCheque!:Number;
  montant!:Number;
  devise!:String


  modifierCheque() {
    const numch = this.numCheque;
    const montant = this.montant;
    const devise = this.devise;
    this.us.chequemodifier(numch, devise, montant).subscribe((ch: Cheque) => {
      if (ch === null) {
        alert("Le numéro de chèque doit avoir 7 caractères.");
      } else {
        this.us.enregistrerCheque(ch).subscribe((Ch: Cheque) => {
          alert("Chèque modifié.");
          this.router.navigate(["/cheque-admin"]);
        });
      }
    });
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

}
