import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactAddDialogComponent } from '../contact-add-dialog/contact-add-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() menuList: Array<any>;
  @Input() contactList: Array<any>;

  @Output() selectedMenu: EventEmitter<any> = new EventEmitter();
  @Output() deleteList: EventEmitter<any> = new EventEmitter();
  @Output() contactDataBack: EventEmitter<any> = new EventEmitter();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    if (!this.menuList) {
      this.menuList = ["menu1", "menu2", "menu3"]
    };
    if (!this.contactList) {
      this.contactList = [
        {
          "_id": "test001",
          "title_name": "title",
          "name": "name",
          "lastname": "lastname",
          "email": "email@email.com",
          "birthdate": "01/01/2511",
          "tel": "011111111",
          "address": "11/11 ต.11 อ.11 จ.11"
        }
      ]
    };

  };

  onMenu(item) {
    this.selectedMenu.emit(item);
  };

  onDelete(idx) {
    this.deleteList.emit(idx);
  }

  openAddList(idx) {
    const dialogRef = this.dialog.open(ContactAddDialogComponent, {
      width: '600px',
      height: '500px',
      data: idx >= 0 ? {
        "_id": this.contactList[idx]._id,
        "title_name": this.contactList[idx].title_name,
        "name": this.contactList[idx].name,
        "lastname": this.contactList[idx].lastname,
        "email": this.contactList[idx].email,
        "birthdate": this.contactList[idx].birthdate,
        "tel": this.contactList[idx].tel,
        "address": this.contactList[idx].address
      } : {
          "title_name": "",
          "name": "",
          "lastname": "",
          "email": "",
          "birthdate": "",
          "tel": "",
          "address": ""
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactDataBack.emit(result)
      }
    });
  }

}
