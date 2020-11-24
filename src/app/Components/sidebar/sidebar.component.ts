import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activePage: string = "books";
  constructor() { }

  ngOnInit(): void {
  }

  changePage(name) {
    this.activePage = name;
  }

}
