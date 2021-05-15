import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  pageTitle: string = "GO FOR CHECKOUT";

  checkoutForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(5)]],
    address: ["", Validators.required],
    phoneNo: ["", Validators.required],
    email: ["", Validators.required]
  });

  constructor(
    private formBuilder : FormBuilder , private cartService : CartService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.clearCart();
    this.checkoutForm.reset;

  }

  public clearCart(){
    this.cartService.clearCart();
  }

}
