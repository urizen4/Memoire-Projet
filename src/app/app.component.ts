import { Component,OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MemoryProject';

  ngOnInit(){
 
  //this.loading();
  }
  // loading(){
  //   $('.section').hide();
  //  setTimeout(() => {
  //     $('.section').fadeIn();
  //     $('#loading').fadeOut();
  //   //fonction pour faire le compte des stats
  //      }, 2000);
  // }
   
}
