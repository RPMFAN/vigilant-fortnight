import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private http: HttpClient,
        ) {
    }

    public users = [];

    firstName = '';
    lastName = '';

    ngOnInit() {
       this.getData().subscribe((response) => {
           this.users = response._embedded.users;
       });
    }

    getData(): Observable<any> {
        return this.http.get('/users');
    }

    postData(): Observable<any> {
        return this.http.post('/users', {firstName : this.firstName, lastName : this.lastName});
    }

    add() {
       this.postData().subscribe((res) => {
         this.users.push({
           firstName : res.firstName,
           lastName : res.lastName
         });
           this.firstName = '';
           this.lastName = '';
       });
    }
}
