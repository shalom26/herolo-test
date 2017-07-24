import {Component, Input, OnInit} from '@angular/core';
import {BookServiceService, IBook} from "../services/book-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  @Input() book: IBook;
  @Input() type: string;
  formGroup: FormGroup;


  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private bookService: BookServiceService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      author: [this.book.author, Validators.required],
      title: [this.book.title, Validators.required],
      date: [this.book.date, Validators.compose([Validators.required,
        Validators.pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)])],

    })
  }

  addEditBook(value) {
    console.log('edeit');
    if (this.type === 'edit') {
      console.log('edit book', value);
      let newBook = Object.assign({}, this.book, value);
      this.bookService.editBook(newBook);
    } else {
      this.bookService.addBook(value);
    }
    this.activeModal.close();
  }

}
