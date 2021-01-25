import { WorldclashComponent } from './pages/worldclash/worldclash.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { EventsComponent } from './pages/events/events.component';
import { TtgComponent } from './pages/ttg/ttg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BbcComponent } from './pages/bbc/bbc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bs-battle-club', component: BbcComponent },
  { path: 'bs-battle-club/events/singles-day-tournament', component: EventsComponent },
  { path: 'tea-time-gaming', component: TtgComponent },
  { path: 'tea-time-gaming/world-clash', component: WorldclashComponent },
  { path: 'sabd', component: SandboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
