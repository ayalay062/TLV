import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EmailRes } from '../models/email.models';

@Injectable({
  providedIn: 'root'
})
export class TlvService {

  url = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;

  }

  sendEmail(email: string) {
    return this.http.post<EmailRes>(this.url + 'api/TLV/GetTimeByEmail', {
      email
    })
  }
}
