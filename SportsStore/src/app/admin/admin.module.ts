import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { ModelModule } from "../model/model.module";

let routing = RouterModule.forChild([
    {
        path: "auth",
        component: AuthComponent
    },
    {
        path: "main",
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "**",
        redirectTo: "auth"
    }
]);

@NgModule({
    imports: [CommonModule, FormsModule,ModelModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }