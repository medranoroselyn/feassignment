
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import 'rxjs/Rx';



@Injectable()
export class ProductListService {
    private _url: string = "http://localhost:3000/app/data.json";

    constructor(private _http: Http){}

    getProducts()
    {
        return this._http.get(this._url)
        .map((response:Response) => response.json());
    }
}