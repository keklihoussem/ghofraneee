import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';

@Component({
  selector: 'app-cheques',
  templateUrl: './cheques.component.html',
  styleUrls: ['./cheques.component.css']
})
export class ChequesComponent implements OnInit{
  ngOnInit(): void {
    this.listetoutCheque();
  }
  [x: string]: any;
  constructor(private us:ChequeService,private router:Router){}
  liste!:Cheque[];

  listetoutCheque() {
    this.us.listetoutcheques().subscribe(
      (cheques: Cheque[]) => {
        this.liste = cheques;
      },
      (error) => {
        console.log(error);
      }
    );
  }

Supprimer(cheque:Cheque) {
  this.us.supprimer(cheque).subscribe(
  () => {
  alert("Cheque supprimé");
  location.reload();
  },
  (error) => {
  console.log(error);
  }
  );
  }

  Modifier(cheque:Cheque){
    this.router.navigate(["/modifier"],  { state: { cheque } });
   }
   status: boolean = false;
   clickEvent(){
       this.status = !this.status; }

}
