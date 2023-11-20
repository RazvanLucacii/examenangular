import { Injectable } from "@angular/core";
import { Login } from "./../../models/login";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthDataService } from "./service.auth-data";
import { Registro } from "src/models/registro";
import { Cubo } from "src/models/cubos";

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

    getRegistro(register: Registro): Observable<any> {
        var json = JSON.stringify(register);
        var header = new HttpHeaders().set("content-type", "application/json");
        console.log(json)
        var request = "api/manage/registrousuario";
        var url = environment.apiUrls + request;
        return this._http.post(url, json,{headers: header});
    }

    getPerfil(): Observable<any> {
        var request = "api/manage/perfilusuario";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        return this._http.get(url, {headers});
    }

    getCompras(): Observable<any> {
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        var request = "api/compra/comprasusuario";
        var url = environment.apiUrls + request;
        return this._http.get(url, {headers});
    }

    create(id: string, cubo: Cubo): Observable<any> {
        var json = JSON.stringify(cubo);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        });
        var request = "api/compra/insertarpedido/" + id;
        var url = environment.apiUrls + request;
        return this._http.post(url, json,{headers});
    }

    setToken(token: string): void {
        this.authDataService.token = token;
    }
}