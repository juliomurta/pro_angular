import { Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";

export const routes: Routes = [
    { path: "store",  component: StoreComponent },
    { path: "cart", component: CartDetailComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "**", redirectTo: "/store"}
];