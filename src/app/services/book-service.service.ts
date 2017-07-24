import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {Subject} from "rxjs/Subject";

export interface IBook {
  isbn: string
  date:string
  title: string
  subtitle: string
  author: string
  published: string
  publisher: string
  pages: number,
  description: string
  website: string
}


@Injectable()
export class BookServiceService {
  dataObservable: Subject<IBook[]> = new Subject;
  booksArray;

  constructor(private http: Http) {

  }

  getBooksList() {
    return this.http.get("assets/data/books-list.json")
      .map(res => res.json()).subscribe(res => {
        this.booksArray = res.books;
        this.dataObservable.next(this.booksArray)
      })
  }

  editBook(book: IBook) {
    let index = this.booksArray.findIndex((el)=>{
      return el.isbn === book.isbn
    });
    this.booksArray[index] = book;
    return this.dataObservable.next([...this.booksArray])
  }

  addBook(book){
    book.isbn = this.booksArray[this.booksArray.length -1].isbn + 1;
    this.booksArray.push(book);
    return this.dataObservable.next([...this.booksArray])
  }

  deleteBook(book){
    let index = this.booksArray.findIndex((el)=>{
      return el.isbn === book.isbn
    });
    this.booksArray = this.booksArray.slice(1,index);
    return this.dataObservable.next([...this.booksArray])
  }
}
