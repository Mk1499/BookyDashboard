import { Apollo } from 'apollo-angular';
import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {getGenres} from '../../Queries/getGenres.query';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit {

loading:boolean = true; 
genres:any[] = []; 
private querySub : Subscription; 


  constructor(private apollo : Apollo) { }

  ngOnInit(): void {
  
    this.querySub = this.apollo.watchQuery<any>({
      query:getGenres
    }).valueChanges.subscribe(({data,loading}) => {
      this.loading = loading ; 
      this.genres = data?.genres ; 
    })
  }

}
