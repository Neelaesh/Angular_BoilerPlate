import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookStoreService } from '../bookStoreData/bookStore.service';

@Component({
    selector : 'addBook-app',
    templateUrl : './addBookComponent.html'
})

export class AddBookComponent implements OnInit{
    
    bookGenres: any[];
    bookFormats : any[];

    constructor(private _bookStoreService: BookStoreService, private route: Router){}

    ngOnInit(){
        this.bookGenres = this._bookStoreService.getGenres();
        this.bookFormats = this._bookStoreService.getFormats();
    }

    addBook(form){

        console.log("Add New Book Contents ",form);
        let currentBookCount = this._bookStoreService.getBookCount();
        let newBook = {
            id: currentBookCount + 1,
            title: form.title,
            author: form.author,
            isbn: form.isbn,
            publicationDate: form.publicationDate,
            publisher: form.publisher,
            price: form.price,
            genre: form.genre,
            format: form.format
        };
        this._bookStoreService.addBook(newBook);
        this.route.navigate(['/books']);
    }
}