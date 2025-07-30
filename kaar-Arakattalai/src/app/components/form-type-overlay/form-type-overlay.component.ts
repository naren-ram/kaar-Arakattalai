import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationFormComponent } from '../education-form/education-form.component';

@Component({
  selector: 'app-form-type-overlay',
  standalone: true,
  imports: [CommonModule, EducationFormComponent],
  templateUrl: './form-type-overlay.component.html',
  styleUrls: ['./form-type-overlay.component.scss']
})
export class FormTypeOverlayComponent {
  @Output() closed = new EventEmitter<void>();

  closeOverlay() {
    this.closed.emit();
  }

  showForm = false;

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }
}


