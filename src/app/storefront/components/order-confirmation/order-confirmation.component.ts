import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  pageTitle: string = "ORDER COFIRMATION";
  constructor() { }

  ngOnInit(): void {
  }

}
