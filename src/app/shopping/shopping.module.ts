import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingRoutingModule } from './shopping-routing.module';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './shopping.component';

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [RouterModule, CommonModule, FormsModule, ShoppingRoutingModule],
})
export class ShoppingModule {}
