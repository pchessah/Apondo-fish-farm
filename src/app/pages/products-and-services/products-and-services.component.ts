import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-and-services',
  templateUrl: './products-and-services.component.html',
  styleUrls: ['./products-and-services.component.scss'],
  styles: [`
  ::ng-deep .panel-header > .mat-expansion-indicator:after {
    color: rgb(101, 101, 101);
  }
`],
})
export class ProductsAndServicesComponent implements OnInit {
  panelOpenState = false;
  constructor() { }


  ngOnInit(): void {
  }

}
