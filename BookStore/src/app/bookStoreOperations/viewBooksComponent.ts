import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookStoreService } from '../bookStoreData/bookStore.service';
import { BookStoreCustomViewService } from '../bookStoreData/bookStoreCustomView.service';

@Component({
    selector : 'viewBooks-app',
    templateUrl : './viewBooksComponent.html'
})

export class ViewBooksComponent implements OnInit{

    books : any[];
    selectedBooks : any;
    arr : any[];
    customView : any = {
        id  : true,
        title : true,
        author : true,
        isbn : true,
        publicationDate : true,
        publisher : true,
        price : true,
        genre : true,
        format : true
    };

    constructor(private _bookStoreService: BookStoreService, private route : Router, 
    private _bookStoreCustomViewService : BookStoreCustomViewService){}

    ngOnInit(){
        this.books = this._bookStoreService.getAllBooks();
        console.log("Books Stock ",this.books);
        this.customView = this._bookStoreCustomViewService.fetchViews();
        console.log("Custom View ",this.customView);
    }

    selectedBook(bookId:any,isSelected:any,books:any){
        
        console.log("Book ID: "+bookId+" Selected: "+isSelected);
       
        if(isSelected){
            this.selectedBooks = this.selectedBooks ? this.selectedBooks + ',' + bookId : bookId;
            console.log("Selected Book Ids: ",this.selectedBooks);
        }
        else{
            this.arr = this.selectedBooks.split(',');
            for(let i=0; i<this.arr.length; i++){
                if(this.arr[i] == bookId){
                    this.arr.splice(i,1);
                    break;
                }
            }
            this.selectedBooks=this.arr.toString();
            console.log("Selected Book Ids: ",this.selectedBooks);
        }
    }

    deleteBooks(){
        let booksToDelete : any;
        let booksArray : any;
        if(this.selectedBooks != undefined && this.selectedBooks!= ""){
            if(this.selectedBooks.includes(',')){
                booksToDelete = this.selectedBooks.split(',');
                console.log(booksToDelete);
                for(let i = 0; i<booksToDelete.length; i++){
                    this._bookStoreService.deleteBook(booksToDelete[i]);
                    this.books = this._bookStoreService.getAllBooks();
                }
                booksArray = this.selectedBooks.split(',');
                for( let j=0; j< booksArray.length; j++){
                    booksArray.splice(j,1);
                }
                this.selectedBooks = booksArray.toString();
                console.log("Selected Books ",this.selectedBooks);
            }
            else{
                this._bookStoreService.deleteBook(this.selectedBooks);
                this.books = this._bookStoreService.getAllBooks();
                this.selectedBooks = [];
            }
            console.log("Books Stock ",this.books);
        }
        else{
            alert("Please select atleast one record to Delete");
        } 
    }

}