import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit() {
    this.AfficherFormulaire();
  }

  AfficherFormulaire(){
    $('#formulaire').hide();
   // $('#card1').hide();
    $('#Afficher').on('click',function(){
   $('#formulaire').slideDown({
     duration:1000
   });
   //$('#card1').slideDown();
    });
  }

  redirecTo(){
    this.router.navigate(['/accueil']);
  }


}
