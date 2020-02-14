import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkComponent } from '../add-link/add-link.component';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

  boldSelected: Boolean = false;
  italicSelected: Boolean = false;
  underlinedSelected: Boolean = false;
  bulletedSelected: Boolean = false;
  numberedSelected: Boolean = false;
  quoteSelected: Boolean = false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onBold() {
    if (this.boldSelected === true) {
      this.boldSelected = false
    } else {
      this.boldSelected = true
    }
  }

  onItalic() {
    if (this.italicSelected === true) {
      this.italicSelected = false
    } else {
      this.italicSelected = true
    }
  }

  onUnderlined() {
    if (this.underlinedSelected === true) {
      this.underlinedSelected = false
    } else {
      this.underlinedSelected = true
    }
  }

  openLinkModal() {
    const dialogRef = this.dialog.open(AddLinkComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onBulleted() {
    if (this.bulletedSelected === true) {
      this.bulletedSelected = false
    } else {
      this.bulletedSelected = true
    }
  }

  onNumbered() {
    if (this.numberedSelected === true) {
      this.numberedSelected = false
    } else {
      this.numberedSelected = true
    }
  }

  onQuote() {
    if (this.quoteSelected === true) {
      this.quoteSelected = false
    } else {
      this.quoteSelected = true
    }
  }

}
