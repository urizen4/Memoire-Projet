import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
// import { from } from 'rxjs';
import { map } from 'rxjs/operators';
declare var $:any
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(private utilisateurService:UtilisateurService) { }
  TabUsers:Utilisateur[];
  ngOnInit() {
    // this.jsFunction();
    this.loading();
    //  this.onGetAllSubscriber();
  }
  
  loading(){
    $('.section').hide();
   setTimeout(() => {
      $('.section').fadeIn();
      $('#loading').fadeOut();
    //fonction pour faire le compte des stats
       }, 1000);
  }
  loading1(){
    $('#loading').fadeIn();
   setTimeout(() => {
      // $('.section').fadeIn();
      $('#loading').fadeOut();
    //fonction pour faire le compte des stats
       }, 1000);
  }

  onSearch(dataForm:any){
    // console.log(dataForm);
  this.utilisateurService.getSearch(dataForm.recherche).subscribe(data=>{
  console.log(data);
  this.TabUsers=data;
  },err=>{
    console.log(err);
  });
  }
 

  onGetAllSubscriber(){
    this.loading1();
    this.utilisateurService.getAllSubscribers().subscribe(data=>{
      console.log(data);
      this.TabUsers=data;
    });
  }
}
