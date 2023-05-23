import { Component } from '@angular/core';

@Component({
  selector: 'org-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  datetime = new Date();
  Name = 'Balu';
  comment = '';
  commentReply = '';
  commentBox = 0;
  id = 0;
  commentDetails: any = [];

  onReply(value: number) {
    this.datetime = new Date();
    this.commentDetails[value].reply.push({ Name: this.Name, dateAndTime: this.datetime, comment: this.commentReply, id: value });
    this.commentReply = '';
  }
  onClick(value: number) {
    this.commentBox = value;
  }

  onSubmit() {
    this.datetime = new Date();
    this.commentDetails.push({ Name: this.Name, dateAndTime: this.datetime, comment: this.comment, id: this.id, reply: [] });
    this.id++;
    this.comment = '';
  }
}
