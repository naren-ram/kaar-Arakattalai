import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationFormComponent } from '../education-form/education-form.component';
import { MedicalFormComponent } from '../medical-form/medical-form.component';

@Component({
  selector: 'app-form-type-overlay',
  standalone: true,
  imports: [CommonModule, EducationFormComponent, MedicalFormComponent],
  templateUrl: './form-type-overlay.component.html',
  styleUrls: ['./form-type-overlay.component.scss']
})
export class FormTypeOverlayComponent {
  @Output() closed = new EventEmitter<void>();

  closeOverlay() {
    this.closed.emit();
  }

  showEducationForm = false;
  showMedicalForm = false;

  openEducationForm() {
    this.showEducationForm = true;
  }

  closeEducationForm() {
    this.showEducationForm = false;
  }

  openMedicalForm() {
    this.showMedicalForm = true;
  }

  closeMedicalForm() {
    this.showMedicalForm = false;
  }
}


