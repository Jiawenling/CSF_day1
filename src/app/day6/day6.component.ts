import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, lastValueFrom, map, observable, Subscription} from "rxjs";

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  constructor(private http: HttpClient) { }

  result: any = {}
  sub$!: Subscription
  origin!: string
  userAgent!: string


  ngOnInit(): void {
    //pipe allows you to manipulate the value..subscribe is for observable only.
    // this.asPromise('https://httpbin.org/get')
    this.asObservable('https://httpbin.org/get')

    }

  asObservableFromPromise(url:string){
    //promise --> observable
    const results$ = this.http.get<any>(url)
    this.sub$ = from(lastValueFrom(results$))
      .subscribe()

  }

  asPromiseFromObservable(url:string){
    const results$ = this.http.get<any>(url)
     return lastValueFrom(results$.pipe(
      map(result => {return {
        origin: result.origin,
        'User-Agent': result.headers['User-Agent']
      } })
    ))
  }


  asPromise(url:string){
    const results$ = this.http.get<any>(url) //returns an observable
    lastValueFrom(results$)
      .then( result=>{
        return {
          origin: result.origin,
          'User-Agent': result.headers['User-Agent']
        }}
      )
      .then( result => {
        this.result = {
          origin: result.origin,
          'user Agent': result['User-Agent']
        }})
      .catch(error => this.result = error)

  }

  ngOnDestroy(){
    this.sub$.unsubscribe()
  }

  asObservable(url:string){
    this.sub$ = this.http.get<any>(url)
      .pipe(
        map(result => {return {
      origin: result.origin,
      'User-Agent': result.headers['User-Agent']
    } })
  )
    .subscribe(
      result => {
        this.origin = result.origin
        this.userAgent = result['User-Agent']
        this.result = {
          origin: this.origin,
          'User Agent': this.userAgent
        }
      })
  }

}
