import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  images = [
    { path: 'https://amayei.nyc3.digitaloceanspaces.com/2019/05/Fish-farm-hero.jpg'}
  ]

  ngOnInit(): void {
  }

}
