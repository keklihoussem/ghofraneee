import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { ChequeService } from 'src/app/cheque.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-cheque-recu',
  templateUrl: './cheque-recu.component.html',
  styleUrls: ['./cheque-recu.component.css']
})
export class ChequeRecuComponent implements OnInit {
  ngOnInit(): void {
    this.listeRecu();
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/recu"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }
  liste!:Cheque[];
  constructor(private us:ChequeService,private router:Router,private localStore:LocalService){}
  listeRecu(){
    this.us.listeRecu().subscribe(
      (cheques: Cheque[]) => {
        this.liste = cheques;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}