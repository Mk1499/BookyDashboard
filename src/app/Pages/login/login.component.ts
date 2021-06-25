import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { loginUser } from '../../Mutations/loginUser.mutations';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  private querySubscription: Subscription;
  loading: boolean = false;

  constructor(private apollo: Apollo, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Email : ", this.email);
    console.log("Password : ", this.password);
    if (!this.email || !this.password) {
      this.toastService.showError("Email and password must be entered")
    } else {
      this.loading = true;
      this.querySubscription = this.apollo.mutate<any>({
        mutation: loginUser,
        variables: {
          email: this.email,
          password: this.password
        }
      }).subscribe(({ data }) => {
        console.log("Login RES : ", data);
        this.loading = false;
        if (data.loginUser) {
          localStorage.setItem("BookyUser", JSON.stringify(data.loginUser))
          this.router.navigate(['/home/books']);
          this.toastService.showSuccess("Success Login Welcome to Booky")
        } else {
          this.toastService.showError("Wrong Email or Password")
        }
      }, (err) => {
        this.loading = false;
      })
    }
  }

}
