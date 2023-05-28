import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent implements OnInit {
  checkInfo!: Cheque;
  nom!:any;
  prenom!:any;
  constructor(private router: Router,private localStore:LocalService) { }
  ngOnInit(): void {
    this.nom=this.localStore.getData('nom');
this.prenom=this.localStore.getData('prenom');
    this.checkInfo = history.state.data;
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/imprimer"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  printPage() {
    window.print();
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
}
