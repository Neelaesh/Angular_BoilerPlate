import { Injectable } from '@angular/core';

import { BooksLocalStore } from './bookStore.localStorage';

@Injectable()
export class BookStoreService extends BooksLocalStore{

    constructor(){
        super();
        this.load();
        this.getBookCount();
    }

    /**
     * Method to get Book Count
     */
    getBookCount(): number{
        let books = this.getBooks();
        console.log("Total Number of Books in Local Store ",books.length);
        return books.length;
    }

    /**
     * Method to fetch all Book Details
     */
    getAllBooks(): any[]{
        return this.getBooks();
    }

    /**
     * Method to delete Book
     * @param bookId 
     */
    deleteBook(bookId: any){
        let books = this.getAllBooks();
        for(let i =0; i <books.length; i++){
            if(bookId == books[i].id){
                books.splice(i,1);
                console.log("After Deletion ",books);
            }
        }
        this.saveBooks(books);
    }

    /**
     * Method to add Book
     * @param books 
     */
    addBook(newBook: any){
        
        let currentBooks = [];
        currentBooks = this.getAllBooks();
        currentBooks.push(newBook);
        this.saveBooks(currentBooks);
        console.log("Books Available Now ",this.getAllBooks());
    }

    /**
     * Method to find a particular Book
     * @param bookid 
     */
    getBook(bookid: any) : any{

        let books = this.getAllBooks();
        for(let i=0; i<books.length; i++){
            if(bookid == books[i].id){
                console.log("Book Found ",books[i]);
                return books[i]; 
            }
        }
    }

    /**
     * Method to update a Book
     * @param book 
     */
    updateBook(book: any){

        let books = this.getAllBooks();
        for(let i=0; i<books.length; i++){
            if(book.id == books[i].id){
                books[i].title = book.title;
                books[i].author = book.author;
                books[i].isbn = book.isbn;
                books[i].publicationDate = book.publicationDate;
                books[i].publisher = book.publisher;
                books[i].price = book.price;
                books[i].genre = book.genre;
                books[i].format = book.format;
            }
        }
        this.saveBooks(books);
    }

    /**
     * Method to fetch all Genres
     */
    getGenres(): any[]{

        let bookGenres = ["Thriller","Mystery","Romance","Horror","Biography","AutoBiography",
        "Life Lesson"];
        return bookGenres;
    }

    /**
     * Method to fetch all Formats
     */
    getFormats(): any[]{

        let bookFormats = ["Audio Book","E Book","HardCover","PaperBack"];
        return bookFormats;
    }

}