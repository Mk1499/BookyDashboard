import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userRole: string = 'user';

  constructor(private translateService: Title, private translate: TranslateService) { }

  ngOnInit(): void {
    let userData: User = JSON.parse(localStorage.getItem("BookyUser"));
    this.userRole = userData.type;
  }

}
