import { Component } from '@angular/core';
import { StoreModule } from './store/store.module';

@Component({
  imports: [StoreModule],
  selector: 'app-root',
  standalone: true,
  template: "<store></store>"
})
export class AppComponent {
  
}
