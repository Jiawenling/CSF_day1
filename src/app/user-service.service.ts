import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Person} from "./person"

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  results!: string

  constructor(private http: HttpClient) {
  }

  postUser(person: Person): string {
    const user = new HttpParams()
      .set('name', person.name)
      .set('phone', person.phone)
      .set('email', person.email)
      .set('gender', person.gender)

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')

    this.http.post<any>("http://localhost:8080/userDetails", user.toString(), {headers}).subscribe(results=> {this.results = results})
    return this.results
  }
}
