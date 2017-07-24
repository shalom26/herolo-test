import {Component, Input, OnInit} from "@angular/core";
import {IBook} from "../services/book-service.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "app/delete-book/delete-book.component";


@Component({
  selector: '[app-book]',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  isOpen: boolean = false;

  constructor(private modal:NgbModal) {
  }

  ngOnInit() {
  }

  openDetails() {
    this.isOpen = !this.isOpen;
  }

  editBook(){
    let modalRef = this.modal.open(EditBookComponent);
    modalRef.componentInstance.book = this.book;
    modalRef.componentInstance.type = 'edit';
  }

  deleteBook(){
    let modalRef = this.modal.open(DeleteBookComponent);
    modalRef.componentInstance.book = this.book;
  }

}
