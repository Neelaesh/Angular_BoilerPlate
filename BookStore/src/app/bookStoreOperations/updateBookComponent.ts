import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookStoreService } from '../bookStoreData/bookStore.service';

@Component({
    selector : 'updateBook-app',
    templateUrl : './updateBookComponent.html'
})

export class UpdateBookComponent implements OnInit{

    bookGenres : any[];
    bookFormats : any[];
    bookDetailsToUpdate = {
        id: '',
        title: '',
        author: '',
        isbn: '',
        publicationDate: '',
        publisher: '',
        price: '',
        genre: '',
        format: ''
    };
    bookIdToUpdate : any;

    constructor(private _bookStoreService : BookStoreService, private activatedRoute : ActivatedRoute,
    private route : Router){}

    ngOnInit(){

        this.bookGenres = this._bookStoreService.getGenres();
        this.bookFormats = this._bookStoreService.getFormats();
        console.log(this.activatedRoute.params);
        this.activatedRoute.params.forEach((params : Params) => {
            this.bookIdToUpdate = params['id'];
            console.log("Book ID to be updated ",this.bookIdToUpdate);
        });
        this.bookDetailsToUpdate = this._bookStoreService.getBook(this.bookIdToUpdate);
        this.bookDetailsToUpdate.format = this.bookDetailsToUpdate.format.toString();
    }

    updateBook(form){

        console.log("Update Book Contents ",form);
        let currentBookCount = this._bookStoreService.getBookCount();
        let bookToBeUpdated = {
            id : this.bookDetailsToUpdate.id,
            title: form.title,
            author: form.author,
            isbn: form.isbn,
            publicationDate: form.publicationDate,
            publisher: form.publisher,
            price: form.price,
            genre: form.genre,
            format: form.format
        };
        this._bookStoreService.updateBook(bookToBeUpdated);
        this.route.navigate(['/books']);
    }
}