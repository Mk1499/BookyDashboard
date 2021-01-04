import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private translateService:Title, private translate:TranslateService) { }

  ngOnInit(): void {
  }

}
