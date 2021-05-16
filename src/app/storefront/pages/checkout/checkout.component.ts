import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'ecom-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  pageTitle: string = 'GO FOR CHECKOUT';
  checkoutForm: any;
  submitted: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', Validators.required],
      phoneNo: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Once the customer added the personal info and place the order, cart will be cleared and
   * customer will went for the order confirmation page
   */
  onSubmit(): void {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      this.clearCart();
      this.checkoutForm.reset;
      this.router.navigateByUrl('/orderConfirmation');
    }
  }

  public clearCart() {
    this.cartService.clearCart();
  }
}
