import { NgForm } from '@angular/forms';
import { ChequeService } from 'src/app/cheque.service';
import { Cheque } from '../cheque';
import { Bordereau } from '../bordereau';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../FileUploadService';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-s-cheque',
  templateUrl: './s-cheque.component.html',
  styleUrls: ['./s-cheque.component.css']
})
export class SChequeComponent implements OnInit {
  forms: any[] = [];
  ngOnInit(): void {
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/cheque"]);
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
  
  numeroBordereau!:Number;
  numeroCheque!:Number;
  montant!:Number;
  devise!:String;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  uploadService: any;
cheque:Cheque = new Cheque();
cheques:Cheque[] = [];
  constructor(private us: ChequeService , uploadService: FileUploadService, private router:Router,private localStore:LocalService){}
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }
  addForm() {
    if (this.forms.length < 5) {
      this.forms.push({
        show: true
      });
    }
    let cheque:Cheque = new Cheque();
    this.cheques.push(cheque);
  }

  removeForm(index: number) {
    this.forms.splice(index, 1);
  }
 
  ajouter() {
    const numB = this.numeroBordereau;
    const numc = this.numeroCheque;
    const montant = this.montant;
    const devise = this.devise;
  
    this.us.nbrchequeparbor(numB).subscribe((n:Number) => {
      if(n==2){
        alert("le numero bordereau a dépassé 6 chèques");
      }else
    this.us.chequelongueur(numc).subscribe((num: Number) => {
      if (num !== 1) {
        alert("Le numéro de chèque doit contenir 7 caractères");
      } else {
        this.us.SaisieCheque(numc, montant, devise, numB).subscribe((cheque: Cheque) => {
          if (cheque === null) {
            alert("Numéro de chèque existe déjà");
          } else {

            this.us.enregistrer(cheque).subscribe({
              next: (res) => {
                console.log(res);
                if (this.selectedFiles) {
                  const file: File | null = this.selectedFiles.item(0);
                  if (file) {
                    this.currentFile = file;
                    this.us.uploadImgCheque(this.currentFile as File, this.cheque.numCheque).subscribe(
                      (res) => {
                        console.log('res', res);
                      }
                    );
                  }
                }
                console.log("Enregistrement réussi: ", res);
                alert("Enregistrement réussi");
                this.router.navigate(["/en-route"], { state: { cheque: res } });
              },
              error: (error) => {
                console.log("Erreur lors de la saisie du chèque: ", error);
              }
            });
          }
        }, (error) => {
          console.log("Erreur lors de la vérification du numéro de chèque: ", error);
        });
      }
    });
  }, (error) => {
    console.log("Erreur lors de la vérification du numéro de chèque: ", error);
  } );
  }
  
  
  

  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
}
