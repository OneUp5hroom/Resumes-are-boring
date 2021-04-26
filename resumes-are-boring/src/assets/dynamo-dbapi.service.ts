import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamoDBAPIService {
  private baseUrl = environment.url;

  constructor(private httpClient: HttpClient) { 
    console.log('getAPIData');
  }

  public getAPIData(databaseTableName: string): Observable<Object> {
    const queryUrl = this.baseUrl + "?databaseTable=" + databaseTableName;


    const response = this.httpClient.get(queryUrl);
    return response;

  }
}
