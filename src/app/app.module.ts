import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BookComponent} from "./book/book.component";
import {BooksTableComponent} from "./books-table/books-table.component";
import {BookServiceService} from "app/services/book-service.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCheckboxModule, MdTableModule} from "@angular/material";
import {CapitalizePipe} from "./pipes/caps.pipe";
import {ToLowerCasePipe} from "./pipes/to-lower-case.pipe";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {SpecialCharsPipe} from "./pipes/special-chars.pipe";


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksTableComponent,
    CapitalizePipe,
    ToLowerCasePipe,
    SpecialCharsPipe,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent],
  entryComponents: [EditBookComponent, DeleteBookComponent]
})
export class AppModule {
}
