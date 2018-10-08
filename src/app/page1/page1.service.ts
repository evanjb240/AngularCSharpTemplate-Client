import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class Page1Service{
    constructor(private http: HttpClient){}

    test(){
        return this.http.get("/api/page1");
    }
}