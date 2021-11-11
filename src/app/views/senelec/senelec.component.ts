import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-senelec',
  templateUrl: './senelec.component.html',
  styleUrls: ['./senelec.component.css']
})
export class SENELECComponent implements OnInit {

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
       }, 1000);
  }

}
