import {Component, Input, OnInit} from '@angular/core';
import {BookServiceService, IBook} from "../services/book-service.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  @Input() book: IBook;

  constructor(private bookService: BookServiceService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  deleteBook() {
    this.bookService.deleteBook(this.book);
    this.activeModal.close();
  }

}
