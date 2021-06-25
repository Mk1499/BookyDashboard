import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('searchBar') searchBar: boolean = true;
  @Input('sideMenu') sideMenu: boolean = true;
  currentLang: string = localStorage.getItem('lang');
  textAligh: string = localStorage.getItem('lang') === 'ar' ? 'right' : 'left';
  // rootStyle: any = <HTMLElement>document.querySelector(":root");
  //

  constructor(private translate: TranslateService, private router: Router) { }


  ngOnInit(): void {
    console.log("Current Lang : ", this.currentLang);

  }

  changeLang(targetLang) {
    // let targetLang = localStorage.getItem('lang') === 'en' ? 'ar' : 'en';
    console.log("Target  ", targetLang);
    let dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    let float = targetLang === 'ar' ? 'right' : 'left';
    this.textAligh = targetLang === 'ar' ? 'right' : 'left';


    // document.documentElement.style.setProperty('--dir', dir);
    // document.documentElement.style.setProperty('--float', float);

    localStorage.setItem('lang', targetLang);
    localStorage.setItem('dir', dir);
    this.translate.use(targetLang);
  }

  logout() {
    localStorage.removeItem("BookyUser");
    this.router.navigate(['/login'])
  }


}
