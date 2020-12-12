import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class productService {

    url = 'http://192.168.43.184:3000/product'

    constructor(private http: HttpClient) {

    }
    getProducts() {
        return this.http.get(this.url)
    }
}