import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactDTO } from '../models/dtos/contact.dto';

const httpHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
};

@Injectable({ providedIn: 'root' })
export class ContactService {
    constructor(private http: HttpClient) {}

    sendEmail(contactDto: ContactDTO): Observable<any> {
        return this.http.post<any>(
            `https://lp-temp1.herokuapp.com/contact`,
            // `http://localhost:8080/contact`,
            contactDto,
            httpHeaders
        );
    }
}
