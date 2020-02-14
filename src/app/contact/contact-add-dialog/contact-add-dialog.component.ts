import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-contact-add-dialog',
  templateUrl: './contact-add-dialog.component.html',
  styleUrls: ['./contact-add-dialog.component.scss']
})
export class ContactAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public contactData: any
  ) { }

  ngOnInit() {

  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.contactData);
  }
}
