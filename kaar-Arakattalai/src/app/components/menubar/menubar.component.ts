import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
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

  handleClick() {
    console.log('Logout clicked');
    // Add any logic you want here
  }
}
