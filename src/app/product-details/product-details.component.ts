import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Primeiro pegue o ID do produto da presente rota.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Encontra o produto que corresponde com o ID da rota.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
