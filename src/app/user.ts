import { Agence } from "./agence";
import { Client } from "./client";
import { Role } from "./role";

export class User {
    matricule!: Number;
    pwd!: String;
    nom!: String;
    prenom!: String;
    email!:String;
    telephone!:Number;
    role!: Role;
    client!:Client;
    agence!:Agence;
}
