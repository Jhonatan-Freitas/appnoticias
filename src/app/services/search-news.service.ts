import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' })
};

const URL_API = "https://newsapi.org/v2/";
const KEY = "87d4c2fa2ce543a0bb6a11ea13721b71";
@Injectable({
  providedIn: 'root'
})
export class SearchNewsService {

  constructor(private http: HttpClient) {
    
   }

   getNewsBrazil():any{
           return this.http.get<any>(`${URL_API}top-headlines?country=pt&apiKey=${KEY}`, httpOptions).pipe(
        catchError(this.handleError<any>(`Falha no getRating`))
      );
    
   }

  private handleError<T>(Operator = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log do erro na console

      // mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}
