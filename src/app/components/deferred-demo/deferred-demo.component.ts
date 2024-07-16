import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-deferred-demo',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './deferred-demo.component.html',
  styleUrl: './deferred-demo.component.css',
})
export class DeferredDemoComponent {}
