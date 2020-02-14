import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddLinkComponent } from './add-link/add-link.component';


@NgModule({
  declarations: [
    CommentBoxComponent,
    AddLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    CommentBoxComponent
  ],
  entryComponents: [
    AddLinkComponent
  ]
})
export class RichTextModule { }
