import { DataSource } from '@angular/cdk/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

export interface DialogData {
  action: string,
  data: Restaurant
}

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['name', 'actions'];
  dataSource: any;

  constructor(public dialog: MatDialog) { }

  openDialog(action: string, data: Restaurant): void {
    let head: string = action;
    switch (head) {
      case 'create':
        head = 'Add Restaurant';
        break;
      case 'update':
        head = 'Edit Restaurant';
        break;
      case 'delete':
        head = 'Delete Restaurant';
        break;
    }

    const dialogRef = this.dialog.open(RestaurantModalComponent, {
      width: '15%', height: 'auto',
      data: { action: action, data: data }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
}