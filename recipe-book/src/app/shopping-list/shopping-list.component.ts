import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients("apples", 5),
    new Ingredients("Tomamto", 6)
  ];
  constructor() {}

  ngOnInit() {}
}
