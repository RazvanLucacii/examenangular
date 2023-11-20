import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthDataService } from "./service.auth-data";
import { Cubo } from "./../../models/cubos";

@Injectable()
export class ServiceCubos {
    constructor(
        private _http: HttpClient,
        private authDataService: AuthDataService,
    ){}

    getCubos(): Promise<any>{
        
        var request = "api/cubos";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        })
        var promise = new Promise((resolve) =>{
            this._http.get(url, {headers}).subscribe(response =>{
                resolve(response);
                
        })
        return promise;
    }
}
