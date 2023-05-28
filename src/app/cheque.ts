import { Banque } from "./banque";
import { Bordereau } from "./bordereau";
import { Client } from "./client";
import { StatutCheque } from "./statut-cheque";
import { User } from "./user";

export class Cheque {
   
        numCheque!:Number;
        montant!:Number;
        devise!:String;
        dateSaisie!:Date;
        dateSortie!:Date;
        numBordereau!:Number;
        dateReception!:Date;
        dateRejet!:Date;
        statut!:StatutCheque;
        bordereau!:Bordereau;
        clientCh!:Client;
        banque!:Banque;
        user!:User;
        image!:String;
        couleur!:String;
        motifRejet!:String;

    
    
}
