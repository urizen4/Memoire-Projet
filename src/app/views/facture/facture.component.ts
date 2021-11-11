import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loading();
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
