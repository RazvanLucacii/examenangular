import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {
  public token: string = '';
}