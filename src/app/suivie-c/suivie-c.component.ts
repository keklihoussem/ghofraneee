import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-suivie-c',
  templateUrl: './suivie-c.component.html',
  styleUrls: ['./suivie-c.component.css']
})
export class SuivieCComponent implements OnInit{
  ngOnInit(): void {
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/suivi"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }
  constructor(private router:Router,private localStore:LocalService){}

}
