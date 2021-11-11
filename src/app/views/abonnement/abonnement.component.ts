import { Component, OnInit } from '@angular/core';
  declare var $ :any;
@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loading();
    this.MyjsFunction();
    
  }

  MyjsFunction(){
  //   $('.modal').modal({
  //     dismissible:false,
  //     inDuration:1000,
  //     outDuration:1000
  // });
  $('select').formSelect();
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
