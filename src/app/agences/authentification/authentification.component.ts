import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  error:any
  authentification={
    matricule:""
  }
  constructor(private router:Router) { }

  ngOnInit() {
    this.loading();
  }
  
  loading(){
    $('.section').hide();
   setTimeout(() => {
      $('.section').fadeIn();
      $('#loading').fadeOut();
    //fonction pour faire le compte des stats
       }, 1000);
  }
  AuthSenelec(dataForm:any){
  if(dataForm.matricule=="S2107070"){
   this.router.navigate(['/dashy']);
   dataForm.matricule="";
  }else{
    this.error="MATRICULE INCORRECT"
    setTimeout(() => {
      $("#erreur").hide();
    }, 2000);
    this.authentification.matricule="";
  }
 
 
  }
}
