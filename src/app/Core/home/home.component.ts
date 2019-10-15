import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: ConnectService ) { }

  ngOnInit() {
    this.getToken();
  }

  getToken(){
    this.token.getToken().suscribe(tk => console.log('success'));
  }

}