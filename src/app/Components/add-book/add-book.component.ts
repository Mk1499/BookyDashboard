import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getAuthorsGenres } from '../../Queries/getAuthorsGenres.query';
import { addBook } from '../../Mutations/addBook.mutation';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  genres: any[];
  authors: any[];

  name: string;
  genre: any;
  authorID: any;
  description: string;
  releaseDate: string = new Date().getFullYear().toString();
  posterURL: string;
  readURL: string = "";
  buyURL: string = "";
  downloadURL: string = "";
  rate: number;



  constructor(private apollo: Apollo) {
    apollo.watchQuery<any>({
      query: getAuthorsGenres,

    }).valueChanges.subscribe((res) => {
      let data = res.data.authorsAndGenres;
      this.genres = data.genres;
      this.authors = data.authors;

    })
  }

  ngOnInit(): void {
  }

  addBook() {


    console.log("name : ",this.name);
    console.log("genre : ",this.genre);
    console.log("authorID: ",this.authorID);
    console.log("description : ",this.description);
    console.log("Download : ",this.downloadURL);
    console.log("releaseDate : ",this.releaseDate);
    console.log("rate : ",this.rate);
    console.log("read : ",this.readURL);
    console.log("buy : ",this.buyURL);

    this.apollo.mutate({
      mutation: addBook,
      variables: {
        name: this.name,
        genreID: this.genre,
        authorID: this.authorID,
        description: this.description,
        releaseDate: this.releaseDate + "",
        posterURL: this.posterURL,
        buyURL: this.buyURL,
        downloadURL: this.downloadURL,
        rate: this.rate,
        readURL: this.readURL
      }
    }).subscribe(({ data }) => {
      console.log("Adding boook RES :  ", data);
      alert("book added success")
      this.name="";
      this.genre="";
      this.authorID="";
      this.description="";
      this.downloadURL=""; 
      this.rate=null;
      this.readURL="";
      this.releaseDate="";
    })
  }
}
