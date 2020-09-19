import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user: User = null;
  public isLoggedIn: boolean = false;
  public isRegistered: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
