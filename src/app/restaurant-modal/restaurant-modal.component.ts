import { CompileStylesheetMetadata } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Restaurant } from '../../models/restaurant.model';
import { DialogData } from '../restaurant-table/restaurant-table.component';

@Component({
  selector: 'app-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.css']
})
export class RestaurantModalComponent implements OnInit {

  head: string = this.setHead();

  constructor(
    private dialogRef: MatDialogRef<RestaurantModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData
  ) { }

  setHead(): string {
    switch(this.data.action) {
      case 'create':
        return 'Create Restaurant';
      case 'update':
        return 'Edit Restaurant';
      case 'delete':
        return 'Delete Restaurant';
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  createRestaurant(): void {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.createRestaurant();
  }

}
