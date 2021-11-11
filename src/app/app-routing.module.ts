import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './agences/authentification/authentification.component';
import { DashboardComponent } from './agences/dashboard/dashboard.component';
import { UtilisateursComponent } from './agences/utilisateurs/utilisateurs.component';
import { AbonnementComponent } from './views/abonnement/abonnement.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { FactureComponent } from './views/facture/facture.component';
import { IndexComponent } from './views/index/index.component';
import { PayementComponent } from './views/payement/payement.component';
import { SENEAUComponent } from './views/seneau/seneau.component';
import { SENELECComponent } from './views/senelec/senelec.component';
import { SubscriberComponent } from './views/subscriber/subscriber.component';


const routes: Routes = [
  { path:"index", component:IndexComponent },
  { path:"inscrire", component:SubscriberComponent },
  { path:"accueil", component:AccueilComponent },
  { path:"Univers-senelec", component:SENELECComponent },
  { path:"Univers-seneau", component:SENEAUComponent },
  { path:"facture", component:FactureComponent },
  { path:"abonnement", component:AbonnementComponent },
  { path:"payement", component:PayementComponent },
  { path:"authentification", component:AuthentificationComponent},
  { path:"dashy", component:DashboardComponent},
  { path:"subscriber", component:UtilisateursComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'**', redirectTo:'/index'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
