import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AllProductsService } from './services/all-products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  data: any[] = [];

  constructor(
    private apiService: AllProductsService
  ) {}

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((response) => {
      this.data = response;
      console.log(response)
    })
  }
}
