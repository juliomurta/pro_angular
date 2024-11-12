import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";

let routing = RouterModule.forChild([
    {
        path: "auth",
        component: AuthComponent
    },
    {
        path: "main",
        component: AdminComponent
    },
    {
        path: "**",
        redirectTo: "auth"
    }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {

}