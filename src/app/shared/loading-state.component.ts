import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./loading-state.component.css']
})
export class LoadingStateComponent {
  @Input() message = 'Loading...';
}