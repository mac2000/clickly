import {Component} from '@angular/core';
import {ManagementService} from '../../../gapi/management.service';
import {GoogleSummaryFlat} from '../../../gapi/interfaces';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  public displayedColumns = ['accountName', 'propertyName', 'profileName', 'websiteUrl'];
  public dataSource: MatTableDataSource<GoogleSummaryFlat>;

  public constructor(private managementService: ManagementService) {
    managementService.getWebSites().subscribe(profiles => this.dataSource = new MatTableDataSource<GoogleSummaryFlat>(profiles));
  }

  public applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
