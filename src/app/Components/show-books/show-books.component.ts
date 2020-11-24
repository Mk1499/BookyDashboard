import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { getBooks } from '../../Queries/getBooks.query';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  loading: boolean;
  books: any[] = [];
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: getBooks
    }).valueChanges.subscribe(({data,loading})=>{
      this.loading = loading; 
      this.books = data?.books; 
      console.log("Data loaded : ",data.books);
      
    })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
