import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
