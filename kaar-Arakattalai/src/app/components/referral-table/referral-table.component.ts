import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { RequestService } from '../../services/requests.service';
import { ViewEncapsulation } from '@angular/core';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Use new Alpine theme
import { SideBarDef } from 'ag-grid-community';



ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-referral-table',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, AgGridModule],
  templateUrl: './referral-table.component.html',
  styleUrls: ['./referral-table.component.scss']
})
export class ReferralTableComponent implements OnInit {
  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 ,cellClass: 'grey-cell'},
    { field: 'beneficiaryName', headerName: 'Beneficiary Name', flex: 2, cellClass: 'grey-cell' },
    { field: 'referralType', headerName: 'Referral Type', flex: 2, cellClass: 'grey-cell' },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      cellClass: 'grey-cell',
      cellRenderer: (params: ICellRendererParams) => {
        const status = params.value as string;
        const statusClass = {
          Approved: 'approved',
          Rejected: 'rejected',
          Pending: 'pending'
        }[status] || 'unknown';

        // Return HTML string for colored pill
        return `<span class="status-pill ${statusClass}">${status}</span>`;
      },
      // Important: let AG Grid treat returned string as HTML
      cellRendererParams: {
        suppressSanitizeHtml: true
      }
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
  sideBarConfig: SideBarDef = {
  toolPanels: [
    {
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns', 
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
    },
    {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters', 
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
    }
  ],
  defaultToolPanel: 'columns'
};





  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(data => {
      this.rowData = data;
    });
  }
}
