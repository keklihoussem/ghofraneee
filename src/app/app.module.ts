import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SChequeComponent } from './s-cheque/s-cheque.component';
import { RechercheOComponent } from './recherche-o/recherche-o.component';
import { ServiceEncaissementComponent } from './service-encaissement/service-encaissement.component';
import { SuivieCComponent } from './suivie-c/suivie-c.component';
import { FinJComponent } from './fin-j/fin-j.component';
import { ImprimerComponent } from './recherche-o/imprimer/imprimer.component';
import { OuvertureComponent } from './service-encaissement/ouverture/ouverture.component';
import { ChequeEnRouteComponent } from './suivie-c/cheque-en-route/cheque-en-route.component';
import { ChequeRecuComponent } from './suivie-c/cheque-recu/cheque-recu.component';
import { ChequeRejeteComponent } from './suivie-c/cheque-rejete/cheque-rejete.component';
import { ChequeTraiteComponent } from './suivie-c/cheque-traite/cheque-traite.component';
import { ClientComponent } from './client/client.component';
import { AgenceComponent } from './agence/agence.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ChequesComponent } from './administrateur/cheques/cheques.component';
import { AgencesComponent } from './administrateur/agences/agences.component';
import { ClientsComponent } from './administrateur/clients/clients.component';
import { EspaceUserComponent } from './administrateur/espace-user/espace-user.component';
import { ModifierComponent } from './administrateur/modifier/modifier.component';
import { AjouterUserComponent } from './administrateur/ajouter-user/ajouter-user.component';
import { ModifierAgenceComponent } from './administrateur/agences/modifier-agence/modifier-agence.component';
import { ModifierClientComponent } from './administrateur/clients/modifier-client/modifier-client.component';
import { ModifierUserComponent } from './administrateur/modifier-user/modifier-user.component';
import { MychartComponent } from './mychart/mychart.component';
import { AjouterAgenceComponent } from './administrateur/ajouter-agence/ajouter-agence.component';
import { FinJServiceComponent } from './fin-j-service/fin-j-service.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { RechercheServiceComponent } from './recherche-service/recherche-service.component';
import { ImprimerserviceComponent } from './recherche-service/imprimerservice/imprimerservice.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     SChequeComponent,
     RechercheOComponent,
     ServiceEncaissementComponent,
     SuivieCComponent,
     FinJComponent,
     ImprimerComponent,
     OuvertureComponent,
     ChequeEnRouteComponent,
     ChequeRecuComponent,
     ChequeRejeteComponent,
     ChequeTraiteComponent,
     ClientComponent,
     AgenceComponent,
     AdministrateurComponent,
     ChequesComponent,
     AgencesComponent,
     ClientsComponent,
     EspaceUserComponent,
     ModifierComponent,
     AjouterUserComponent,
     ModifierAgenceComponent,
     ModifierClientComponent,
     ModifierUserComponent,
     MychartComponent,
     AjouterAgenceComponent,
     FinJServiceComponent,
     EncaissementComponent,
     RechercheServiceComponent,
     ImprimerserviceComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
