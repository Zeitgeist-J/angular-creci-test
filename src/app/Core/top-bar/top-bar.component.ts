import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  test: boolean;
  isLogged: any = this.test? "My account":"LogIn";
  
  logged(){ 
    this.test = !this.test; 
    this.isLogged = this.test? "My account":"LogIn";    
  }

  goLog(){
    this.router.navigate(['/LogIn']);
  }

  backHome(){
    this.router.navigate(['/Home']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.test = true;
    this.test = !this.test; 
  }

}

