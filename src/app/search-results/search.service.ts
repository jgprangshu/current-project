import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResults } from './search';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl : string = "/assets/data/search-data.json";

  constructor(private http : HttpClient) { }

  getResults() : Observable<IResults[]>{

    return this.http.get<IResults[]>(this.baseUrl);

  }
}
