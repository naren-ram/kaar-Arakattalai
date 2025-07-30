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
  selector: 'app-education-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
})
export class EducationFormComponent {
  @Output() formClosed = new EventEmitter<void>();

  educationForm: FormGroup;
  charCount = 0;
  selectedType: 'Individual' | 'NGO' = 'Individual';

  constructor(private fb: FormBuilder, private eRef: ElementRef) {
    this.educationForm = this.fb.group({
      type: ['Individual', Validators.required],
      beneficiaryName: [''],
      mobile: [''],
      institutionName: [''],
      institutionLocation: [''],
      accountName: [''],
      amount: [''],
      justification: [''],
      bonafide: [null],
      idCard: [null],
      idCard2: [null],
      aadhar: [null],
      certificate: [null],
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
    this.educationForm.patchValue({ type });
  }

  onTextChange(event: Event) {
    const input = (event.target as HTMLTextAreaElement).value;
    this.charCount = input.length;
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.educationForm.patchValue({ [field]: file });
    }
  }

  onSubmit() {
    alert(`${this.selectedType} form submitted!`);
    this.formClosed.emit();
  }

  onCancel() {
    this.formClosed.emit();
  }
}
