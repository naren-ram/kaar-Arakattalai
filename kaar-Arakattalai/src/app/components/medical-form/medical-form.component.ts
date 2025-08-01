import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  HostListener,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss'],
})
export class MedicalFormComponent {
  @Output() formClosed = new EventEmitter<void>();

  medicalForm: FormGroup;
  charCount = 0;
  selectedType: 'Individual' | 'NGO' = 'Individual';

  constructor(private fb: FormBuilder, private eRef: ElementRef) {
    this.medicalForm = this.fb.group({
      type: ['Individual', Validators.required],
      patientName: [''],
      mobile: [''],
      hospitalName: [''],
      hospitalLocation: [''],
      accountName: [''],
      amount: [''],
      diagnosis: [''],
      treatment: [''],
      prescription: [null],
      medicalReport: [null],
      idCard: [null],
      aadhar: [null],
      dischargeSummary: [null],
      declaration: [false],
      // NGO specific fields
      ngoName: [''],
      ngoRegNo: [''],
      ngoContact: [''],
      ngoAddress: ['']
    });
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.formClosed.emit();
    }
  }

  setType(type: 'Individual' | 'NGO') {
    this.selectedType = type;
    this.medicalForm.patchValue({ type });
  }

  onTextChange(event: Event) {
    const input = (event.target as HTMLTextAreaElement).value;
    this.charCount = input.length;
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.medicalForm.patchValue({ [field]: file });
    }
  }

  onSubmit() {
    alert(`${this.selectedType} medical form submitted!`);
    this.formClosed.emit();
  }

  onCancel() {
    this.formClosed.emit();
  }
} 