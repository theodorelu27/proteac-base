import { EventsComponent } from './pages/events/events.component';
import { TtgComponent } from './pages/ttg/ttg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BbcComponent } from './pages/bbc/bbc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bs-battle-club', component: BbcComponent },
  { path: 'bs-battle-club/events/first-online-meeting', component: EventsComponent },
  { path: 'tea-time-gaming', component: TtgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
