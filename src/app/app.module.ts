import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { SubscriberComponent } from './views/subscriber/subscriber.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { SENELECComponent } from './views/senelec/senelec.component';
import { SENEAUComponent } from './views/seneau/seneau.component';
import { TopbarComponent } from './views/topbar/topbar.component';
import { FactureComponent } from './views/facture/facture.component';
import { AbonnementComponent } from './views/abonnement/abonnement.component';
import { PayementComponent } from './views/payement/payement.component';
import { DashboardComponent } from './agences/dashboard/dashboard.component';
import { AuthentificationComponent } from './agences/authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './agences/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UtilisateurService } from './services/utilisateur.service';
import { UtilisateursComponent } from './agences/utilisateurs/utilisateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SubscriberComponent,
    AccueilComponent,
    SENELECComponent,
    SENEAUComponent,
    TopbarComponent,
    FactureComponent,
    AbonnementComponent,
    PayementComponent,
    DashboardComponent,
    AuthentificationComponent,
    NavbarComponent,
    UtilisateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
