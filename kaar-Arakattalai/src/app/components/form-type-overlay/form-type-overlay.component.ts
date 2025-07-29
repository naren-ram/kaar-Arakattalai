import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-type-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-type-overlay.component.html',
  styleUrls: ['./form-type-overlay.component.scss']
})
export class FormTypeOverlayComponent {
  @Output() closed = new EventEmitter<void>();

  closeOverlay() {
    this.closed.emit();
  }
}


