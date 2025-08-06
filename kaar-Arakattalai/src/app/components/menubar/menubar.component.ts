import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormTypeOverlayComponent } from '../form-type-overlay/form-type-overlay.component';
import { RequestService } from '../../services/requests.service';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, FormsModule, FormTypeOverlayComponent] ,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
  showOverlay = false;
  totalContribution: number = 0;
  searchQuery: string = '';

  constructor(private requestService: RequestService) {}

  ngOnInit() : void {
      this.requestService.getTotalContribution().subscribe((data: number) => {
        this.totalContribution = data;
      });
  }

  getTotalContribution(): void {
    this.requestService.getTotalContribution().subscribe((data: number) => {
      this.totalContribution = data;
    });
  }

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    // Add your search logic here
    console.log('Searching for:', this.searchQuery);
  }
}
