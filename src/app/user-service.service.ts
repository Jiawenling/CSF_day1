import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Person, ResponseMessage} from "./person"
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  results!: string

  constructor(private http: HttpClient) {
  }

  postUser(person: Person): Promise<ResponseMessage> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')

    return lastValueFrom(this.http.post<any>("http://localhost:8080/userDetails", person, {headers}))

  }
}
