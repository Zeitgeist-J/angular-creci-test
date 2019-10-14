import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(protected http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  backHome(){
    this.router.navigate(['/Home']);
  }

 
  



}