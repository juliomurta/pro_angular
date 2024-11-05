import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StoreModule } from './store/store.module';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",  
  imports: [
    CommonModule, 
    StoreModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  standalone: true,
})
export class AppComponent {
  
}
