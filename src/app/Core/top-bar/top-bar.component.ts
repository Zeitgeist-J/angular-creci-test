import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  test = false;
  isLogged: any = this.test? "My account":"LogIn";
  
  logged(){ 
    this.test = !this.test; 
    this.isLogged = this.test? "My account":"LogIn";    
  }

  constructor() { }

  ngOnInit() {
  }

}

