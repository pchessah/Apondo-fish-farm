import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  currentYear: number = 0

  ngOnInit(): void {
    this.currentYear = this.getCurrentYear()
  }

  getCurrentYear(): number {
    return new Date().getFullYear()
  }



}
