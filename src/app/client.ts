import { Agence } from "./agence";
import { Cheque } from "./cheque";
import { Compte } from "./compte";
import { User } from "./user";

export class Client {
    id!:Number;
    numClient!:Number;
    nomClient!:String;
    prenomClient!:String;
    numeroTelephone!:String;
    mailClient!:String;
    compte!:Compte;
    cheques!:Cheque[];
    agence!:Agence;
    user!:User;

    getId(){
        return this.id;
    }
}
