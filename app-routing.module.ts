import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: 'apple', component: AppleComponent },
  {path: 'bitcoin', component: BitcoinComponent },
  {path: 'business', component: BusinessComponent },
  {path: '', redirectTo: '/apple', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }