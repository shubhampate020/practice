import { Component, OnInit } from '@angular/core';
import { productService } from './product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = []

  constructor(private service: productService) {

  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(response => {
      if (response['status'] == 'success') {
        this.products = response['data']
      } else {
        alert('error')
      }
    })
  }

}
