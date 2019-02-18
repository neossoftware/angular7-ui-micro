import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class DockerServiceService {

    constructor(private http: HttpClient) {}

    private extractData(res: Response) {
        let body = res;
        console.log(body);
        return body || { };
    }

    getCustomers(): Observable<any> {
        return this.http.get(endpoint + 'customer').pipe(
            map(this.extractData));
    }

}
