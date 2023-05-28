import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from '../cheque.service';
import { Cheque } from '../cheque';
import { LocalService } from '../local.service';
import { User } from '../user';

@Component({
  selector: 'app-service-encaissement',
  templateUrl: './service-encaissement.component.html',
  styleUrls: ['./service-encaissement.component.css']
})
export class ServiceEncaissementComponent implements OnInit {
  user!:User;
  nom!:any;
prenom!:any;
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
    this.user = history.state.user;
    this.couleur();
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/service"]);
    }else if(data=="3"){
      this.router.navigate(["/administrateur"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }
  constructor( private router :Router,private us:ChequeService,private localStore:LocalService){}
  
   accuseClicked: boolean = false;
   liste!:Cheque[];

   onAccuseClick(cheque: Cheque) {
    this.accuseClicked = true;
    this.us.recuStatut(cheque).subscribe((ch: Cheque) => {
      console.log(ch);
     }, (error) => {
    console.log(error);
  });
}

Deconnexion(){
  this.localStore.saveData('role',"0");
  location.reload();
}
  onOuvertureClick(cheque:Cheque) {
    this.router.navigate(["/ouverture"],  { state: { cheque } });
  }

  couleur() {
    this.us.couleur().subscribe(
      (listee:Cheque[]) => {
      this.liste=listee;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
