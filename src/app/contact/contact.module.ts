import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactAddDialogComponent } from './contact-add-dialog/contact-add-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactAddDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule
  ],
  exports: [
    ContactListComponent
  ],
  entryComponents: [
    ContactAddDialogComponent
  ]
})
export class ContactModule { }
