import { Product } from "./../products";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }
}
