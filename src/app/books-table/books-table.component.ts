import {Component, OnInit} from '@angular/core';
import {BookServiceService, IBook} from "../services/book-service.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditBookComponent} from "../edit-book/edit-book.component";

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {

  public books: Array<IBook>;

  constructor(private booksService: BookServiceService,private modal:NgbModal) {
  }

  ngOnInit() {
    this.booksService.getBooksList();
      this.booksService.dataObservable.subscribe(res => {
      this.books = res;
    })
  }

  addBook(){
    let book = {author:'',title:''};
    let compRef = this.modal.open(EditBookComponent);
    compRef.componentInstance.type = 'add';
    compRef.componentInstance.book = book
  }

}
