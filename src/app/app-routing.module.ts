import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AgenceComponent } from './agence/agence.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { RechercheOComponent } from './recherche-o/recherche-o.component';
import { SChequeComponent } from './s-cheque/s-cheque.component';
import { ServiceEncaissementComponent } from './service-encaissement/service-encaissement.component';
import { SuivieCComponent } from './suivie-c/suivie-c.component';

import { OuvertureComponent } from './service-encaissement/ouverture/ouverture.component';
import { ChequeEnRouteComponent } from './suivie-c/cheque-en-route/cheque-en-route.component';
import { ChequeRejeteComponent } from './suivie-c/cheque-rejete/cheque-rejete.component';
import { ChequeTraiteComponent } from './suivie-c/cheque-traite/cheque-traite.component';
import { ChequeRecuComponent } from './suivie-c/cheque-recu/cheque-recu.component';
import { ImprimerComponent } from './recherche-o/imprimer/imprimer.component';
import { FinJComponent } from './fin-j/fin-j.component';
import { EspaceUserComponent } from './administrateur/espace-user/espace-user.component';
import { AjouterUserComponent } from './administrateur/ajouter-user/ajouter-user.component';
import { ChequesComponent } from './administrateur/cheques/cheques.component';
import { AgencesComponent } from './administrateur/agences/agences.component';
import { ModifierAgenceComponent } from './administrateur/agences/modifier-agence/modifier-agence.component';
import { ClientsComponent } from './administrateur/clients/clients.component';
import { ModifierClientComponent } from './administrateur/clients/modifier-client/modifier-client.component';
import { ModifierUserComponent } from './administrateur/modifier-user/modifier-user.component';
import { MychartComponent } from './mychart/mychart.component';
import { AjouterAgenceComponent } from './administrateur/ajouter-agence/ajouter-agence.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { FinJServiceComponent } from './fin-j-service/fin-j-service.component';
import { RechercheServiceComponent } from './recherche-service/recherche-service.component';
import { ImprimerserviceComponent } from './recherche-service/imprimerservice/imprimerservice.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"agence", component:AgenceComponent},
  {path:"client", component:ClientComponent},
  {path:"service", component:ServiceEncaissementComponent},
  {path:"administrateur", component:AdministrateurComponent },
  {path:"cheque", component:SChequeComponent },
  {path:"Suivie", component:SuivieCComponent },
  {path:"recherche", component:RechercheOComponent},
  {path:"ouverture", component:OuvertureComponent},
  {path:"en-route", component:ChequeEnRouteComponent},
  {path:"rejete", component:ChequeRejeteComponent},
  {path:"traite", component:ChequeTraiteComponent},
  {path:"recu", component:ChequeRecuComponent},
  {path:"imprimer",component:ImprimerComponent},
  {path:"fin", component:FinJComponent},
  {path:"user",component:EspaceUserComponent},
  {path:"ajouteruser",component:AjouterUserComponent},
  {path:"cheque-admin",component:ChequesComponent},
  {path:"agences",component:AgencesComponent},
  {path:"modifier-agence",component:ModifierAgenceComponent},
  {path:"clients",component:ClientsComponent},
  {path:"modifier-client",component:ModifierClientComponent},
  {path:"modifier-user",component:ModifierUserComponent},
  {path:"chart",component:MychartComponent},
  {path:"ajouterAgence",component: AjouterAgenceComponent},
  {path:"encaissement",component: EncaissementComponent},
  {path:"finjservice",component: FinJServiceComponent},
  {path:"rechercheservice",component: RechercheServiceComponent},
  {path:"imprimerService",component: ImprimerserviceComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
