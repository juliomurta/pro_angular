import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { ModelModule } from "../model/model.module";
import { OrderTableComponent } from "./orderTable.component";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";

let routing = RouterModule.forChild([
    {
        path: "auth",
        component: AuthComponent
    },
    {
        path: "main",
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: "products/:mode/:id", 
                component: ProductEditorComponent 
            },
            { 
                path: "products/:mode", 
                component: ProductEditorComponent 
            },
            { 
                path: "products", 
                component: ProductTableComponent 
            },
            { 
                path: "orders", 
                component: OrderTableComponent 
            },
            { 
                path: "**", 
                redirectTo: "products" 
            }
        ]
    },
    {
        path: "**",
        redirectTo: "auth"
    }
]);

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ModelModule, 
        routing
    ],
    providers: [AuthGuard],
    declarations: [
        AuthComponent, 
        AdminComponent, 
        ProductTableComponent,
        ProductEditorComponent,
        OrderTableComponent
    ]
})
export class AdminModule { }