import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BookStoreService } from '../bookStoreData/bookStore.service';

@Component({
    selector : 'viewBooks-app',
    templateUrl : './viewBookComponent.html'
})

export class ViewBookComponent implements OnInit{

    allBookDetails : any[];
    id : any;
    title : any;
    author : any;
    isbn : any;
    publicationDate : any;
    publisher : any;
    price : any;
    genre : any;
    format : any;
    bookDetail : any[];

    constructor(private bookStoreService : BookStoreService, private route: ActivatedRoute, 
    private location: Location){
        
    }

    ngOnInit(){
        console.log("Route ",this.route);
        this.allBookDetails = this.bookStoreService.getAllBooks();
        this.route.params.forEach((params: Params)=>{
            this.id = params['id'];
            console.log("Book ID: ",this.id);
        });
        this.bookDetail = this.allBookDetails.filter(book=> book.id == this.id);
        for(var i=0;i<this.bookDetail.length;i++){
            this.title = this.bookDetail[i].title;
            this.author = this.bookDetail[i].author;
            this.isbn = this.bookDetail[i].isbn;
            this.publicationDate = this.bookDetail[i].publicationDate;
            this.publisher = this.bookDetail[i].publisher;
            this.price = this.bookDetail[i].price;
            this.genre = this.bookDetail[i].genre;
            this.format = this.bookDetail[i].format;
        }
    }

    goBack(){
        this.location.back();
    }
}