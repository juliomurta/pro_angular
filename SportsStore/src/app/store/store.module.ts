import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

@NgModule({
    imports: [ModelModule, FormsModule, CommonModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
    exports: [StoreComponent]
})
export class StoreModule { }