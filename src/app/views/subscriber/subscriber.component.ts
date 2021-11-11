import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  Utilisateurform:FormGroup;
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.AfficherFormulaire();
    this.iniForm();
  }

  iniForm(){
    // this.id1=this.id1+1;
    this.Utilisateurform = this.fb.group({
    nom: ['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]],
    prenom: ['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z0-9 ]*')]],
    email: ['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    telephone: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('[0-9]*')]],
    dateDeNaissance: ['',Validators.required],
    adresse:['',[Validators.required,Validators.minLength(5)]]
     });
  }


   AfficherFormulaire(){
    $('#formulaire').hide();
    $('#formulaire').slideDown({
      duration:2000
    });
   }
   loading(){
    $('.section').hide();
   setTimeout(() => {
      $('.section').fadeIn();
      $('#loading').fadeOut();
    //fonction pour faire le compte des stats
       }, 2000);
  }
  onSubmit(){

  }
}
