import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CommentBoxComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    CommentBoxComponent
  ]
})
export class RichTextModule { }
