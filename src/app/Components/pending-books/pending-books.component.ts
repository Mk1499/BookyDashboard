import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ToastService } from 'src/app/Services/toast.service';
import { getPendingBooks } from '../../Queries/getBooks.query';
import { updateBookStatus } from '../../Mutations/updateBookStatus.mutation';

@Component({
  selector: 'app-pending-books',
  templateUrl: './pending-books.component.html',
  styleUrls: ['./pending-books.component.css']
})
export class PendingBooksComponent implements OnInit {
  loading: boolean = true;
  books: any[];
  processing: boolean = false;
  constructor(private apollo: Apollo, private toastService: ToastService) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: getPendingBooks
    }).valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.books = data?.pendingBooks;
    })
  }

  viewBook(url) {
    if (url)
      window.open(url, '_blank');
    else {
      this.toastService.showError("NO File URL Provided")
    }
  }

  changeStatus(bookID, status) {
    this.processing = true;
    this.apollo.mutate({
      mutation: updateBookStatus,
      variables: {
        bookID,
        status
      }
    }).subscribe(({ data }) => {
      console.log("update Data : ", data);

      if (data) {
        this.toastService.showSuccess("Status updated success !!");
      } else {
        this.toastService.showError("Status not updated !!");
      }
      this.afterReqDone(bookID)
    }, (err) => {
      this.toastService.showError("Status not updated !!");
      this.processing = false;
    })
  }

  afterReqDone(id) {
    this.books = this.books.filter(book => book.id !== id);
    this.processing = false;
  }

}
