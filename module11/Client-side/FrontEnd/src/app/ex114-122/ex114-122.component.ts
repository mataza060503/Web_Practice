
import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/Book.service';
import { Book, BookData } from '../models/Book';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-ex114-122',
  templateUrl: './ex114-122.component.html',
  styleUrl: './ex114-122.component.css'
})
export class Ex114122Component implements OnInit{
  @Input()
  requiredFileType:any;
  fileName = '';
  uploadProgress:number=0;
  uploadSub: Subscription=new Subscription();
  
  bookData!: BookData[]
  book = new Book()
  errMessage: string = ""
  searchInp:string = ""

  selectedFile: File | null = null;

  constructor(private bookService:BookService, private http:HttpClient) {

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("image", file);
      const upload$ = this.http.post("http://localhost:3000/upload", formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        finalize(() => this.reset())
      );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }
      });
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }
  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
    
  ngOnInit(): void {
    this.loadAllBooks()
  }

  loadAllBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (data) => this.bookData = data,
      error: (err) => this.errMessage = err
    })
  }

  search() {
    this.errMessage = '';
    this.bookService.getBook(this.searchInp).subscribe({
      next: (data) => {
        console.log(data)
        this.bookData = [data]; 
      },
      error: (err) => {
        this.errMessage = err; 
        this.bookData = []; 
      }
    });
  }

  add() {

    this.bookService.postBook(this.book).subscribe({
      next: (data) => {
        console.log("Book added successfully:", data);
        this.loadAllBooks()
      },
      error: (err) => {
        this.errMessage = err;
        console.error("Error adding book:", err);
      }
    });
  }

  update() {

    this.bookService.putBook(this.book).subscribe({
      next: (data) => {
        console.log("Book added successfully:", data);
        this.loadAllBooks()
      },
      error: (err) => {
        this.errMessage = err;
        console.error("Error adding book:", err);
      }
    });
  }

  delete() {
    this.bookService.deleteBook(this.book.BookId).subscribe({
      next: (data) => {
        console.log("Book added successfully:", data);
        this.loadAllBooks()
      },
      error: (err) => {
        this.errMessage = err;
        console.error("Error adding book:", err);
      }
    });
  }
}
