import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-seneau',
  templateUrl: './seneau.component.html',
  styleUrls: ['./seneau.component.css']
})
export class SENEAUComponent implements OnInit {

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
