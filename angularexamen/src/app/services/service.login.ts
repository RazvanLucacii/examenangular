import { Injectable } from "@angular/core";
import { Login } from "./../../models/login";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthDataService } from "./service.auth-data";

@Injectable()
export class ServiceLogin{

    constructor(
        private _http: HttpClient,
        private authDataService: AuthDataService,
    ) {}

    getLogin(login: Login): Observable<any> {
        var json = JSON.stringify(login);
        var header = new HttpHeaders().set("content-type", "application/json");
        console.log(json)
        var request = "api/manage/login";
        var url = environment.apiUrls + request;
        return this._http.post(url, json,{headers: header});
    }

    setToken(token: string): void {
        this.authDataService.token = token;
      }
}