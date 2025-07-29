import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTypeOverlayComponent } from '../form-type-overlay/form-type-overlay.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, FormTypeOverlayComponent] ,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
  showOverlay = false;
  totalContribution: number = 0;

  ngOnInit() {
    this.getTotalContribution();
  }

  getTotalContribution() {
    // TODO: Replace this with actual backend service call
    // Example: this.backendService.getTotalContribution().subscribe(data => {
    //   this.totalContribution = data.total;
    // });
    
    // For now, simulating backend response
    this.totalContribution = 79;
  }
}
