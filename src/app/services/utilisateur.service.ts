import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient ) { 


  }

  getAllSubscribers():Observable<Utilisateur[]>{
    let host=environment.hostgetuser;
   return this.http.get<Utilisateur[]>(host+"/utilisateur");
  }

  getSearch(util:Utilisateur):Observable<Utilisateur[]>{
    let host=environment.hostgetuser
    console.log(util)
    return this.http.get<Utilisateur[]>(host+"/utilisateur?name_like"+util);
  }
}
