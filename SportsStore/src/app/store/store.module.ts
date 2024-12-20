import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        ModelModule, 
        FormsModule, 
        CommonModule,
        RouterModule
    ],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        CartSummaryComponent, 
        CartDetailComponent, 
        CheckoutComponent
    ],
    exports: [StoreComponent]
})
export class StoreModule { }