import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' })
};
//87d4c2fa2ce543a0bb6a11ea13721b71
const URL_API = "https://newsapi.org/v2/";
const KEY = "6dd27f8adaf94238b8b78802479c9803";
@Injectable({
  providedIn: 'root'
})
export class SearchNewsService {

  constructor(private http: HttpClient) {
    
   }

   //Top headlines from Globo
   getNewsBrazil():any{
           return this.http.get<any>(`${URL_API}top-headlines?country=pt&apiKey=${KEY}`, httpOptions).pipe(
        catchError(this.handleError<any>(`Falha no getRating`))
      );
    
   }

   //Search all recent articles at Globo
   getNewsRecent():any{
    return this.http.get<any>(`${URL_API}everything?sources=globo&apiKey=${KEY}`, httpOptions).pipe(
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
