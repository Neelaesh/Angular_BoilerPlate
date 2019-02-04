import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutBookComponent } from './bookStore/aboutBookComponent';
import { ViewBooksComponent } from './bookStoreOperations/viewBooksComponent';
import { ViewBookComponent } from './bookStoreOperations/viewBookComponent';
import { AddBookComponent } from './bookStoreOperations/addBookComponent';
import { UpdateBookComponent } from './bookStoreOperations/updateBookComponent';
import { BooksCustomViewComponent } from './bookStoreOperations/booksCustomViewComponent';

import { NumbersOnly } from './bookStoreDirectives/numbersonly.directive';
import { AlphabetsSpacesOnly } from './bookStoreDirectives/alphabetsSpacesonly.directive';
import { AlphabetsSpacesPeriodsOnly } from './bookStoreDirectives/alphabetsSpacesPeriodsOnly.directive';

import { BookNameFilterPipe } from './bookStoreOperations/bookName.filter.pipe';
import { BookStoreService } from './bookStoreData/bookStore.service';
import { BookStoreCustomViewService } from './bookStoreData/bookStoreCustomView.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, AboutBookComponent, ViewBooksComponent, ViewBookComponent, AddBookComponent, 
    UpdateBookComponent, BooksCustomViewComponent, BookNameFilterPipe, NumbersOnly, AlphabetsSpacesOnly, AlphabetsSpacesPeriodsOnly
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [BookStoreService, BookStoreCustomViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
