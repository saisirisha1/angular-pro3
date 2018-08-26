import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }

  private message = new BehaviorSubject('default data');

  data = this.message.asObservable();

  changeMessage(newdata: string) {
    this.message.next(newdata)
  }

  sampleApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    // .map((res:Response) => res.json());
    // console.log('result....',result);
  }
  
  rawdata(){
    return this.http.get('https://api.github.com/users/hadley/orgs');
  }
}
