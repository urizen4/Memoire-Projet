import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jsFunction();
    this.loading();
  }
   
  jsFunction(){
    $('.carousel').carousel();
  }
  loading(){
    $('.section').hide();
   setTimeout(() => {
      $('.section').fadeIn();
      $('#loading').fadeOut();
    //fonction pour faire le compte des stats
       }, 2000);
  }
}
