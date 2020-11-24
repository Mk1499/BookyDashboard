import { Component, OnInit } from '@angular/core';
import { addAuthor } from '../../Mutations/addAuthor.mutation';
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  authorName: string;
  age: number;
  bio: string;
  avatarURL: string;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  addAuthor() {
    console.log("authorName : ", this.authorName);
    console.log("authorName : ", this.age);
    console.log("authorName : ", this.bio);
    console.log("authorName : ", this.avatarURL);
    this.apollo.mutate({
      mutation: addAuthor,
      variables: {
        name: this.authorName,
        age: this.age,
        bio: this.bio,
        avatarURL: this.avatarURL
      }
    }).subscribe(({ data }) => {
      console.log("Adding Author RES : ", data);
      this.age = null; 
      this.authorName = "";
      this.bio=""; 
      this.avatarURL=""; 
      alert("Author Added Successfully");
    })

  }

}
