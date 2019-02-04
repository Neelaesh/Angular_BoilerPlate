/**
 * Class Used to Load Initial Set of Data
 */

 export class BooksLocalStore{

    books : any[] = [
        {
        "id"  : "1",
        "title" : "The Forbidden Door",
        "author" : "Jane Hawk",
        "isbn" : "9788700631625",
        "publicationDate" : "2009-01-22",
        "publisher" : "Dean Koontz",
        "price" : "500",
        "genre" : "Mystery",
        "format" : "HardCover"
		},
		{
			"id"  : "2",
			"title" : "Leverage in Death",
			"author" : "Nora Roberts",
			"isbn" : "9458712716548",
			"publicationDate" : "2018-09-04",
			"publisher" : "Harlen Coben",
			"price" : "800",
			"genre" : "Thriller",
			"format" : "PaperBack"
		},
		{
			"id"  : "3",
			"title" : "The Restless Wave",
			"author" : "John McCain",
			"isbn" : "9458712713455",
			"publicationDate" : "2018-05-22",
			"publisher" : "Simon & Schuster",
			"price" : "1100",
			"genre" : "Biography",
			"format" : "E Book"
		},
		{
			"id"  : "4",
			"title" : "War and Peace",
			"author" : "Leo Tolstoy",
			"isbn" : "9781582701709",
			"publicationDate" : "2018-02-13",
			"publisher" : "Grand Central",
			"price" : "400",
			"genre" : "Action and Adventure",
			"format" : "Paperback"
		}
    ];

    /**
     * Loads the Initial Set of Books from Local Storage
     */
    load(){
        this.saveBooks(this.books);
        console.log("Loading Books Available from Local Storage");
    }

    /**
     * Method to Save books to Local Storage
     * @param books 
     */
    saveBooks(books: any) : void{
        localStorage.setItem('bookstore',JSON.stringify(books));
    }

    /**
     * Method to fetch books from Local Storage
     */
    getBooks(): any[]{
        return JSON.parse(localStorage.getItem('bookstore'));
    }
 }