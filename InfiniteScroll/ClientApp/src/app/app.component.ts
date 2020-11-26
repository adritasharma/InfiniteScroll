import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';


  offset: number = 0
  offsetLoader: boolean = false


  products = [
    { "Name": "Cheese", "Price": 2.50, "Category": "Refrigerated foods" },
    { "Name": "Crisps", "Price": 3, "Category": "the Snack isle" },
    { "Name": "Pizza", "Price": 4, "Category": "Refrigerated foods" },
    { "Name": "Chocolate", "Price": 1.50, "Category": "the Snack isle" },
    { "Name": "Self-raising flour", "Price": 1.50, "Category": "Home baking" },
    { "Name": "Ground almonds", "Price": 3, "Category": "Home baking" },
    { "Name": "Mayoneese", "Price": 2.50, "Category": "Refrigerated foods" },
    { "Name": "Fritters", "Price": 3, "Category": "the Snack isle" },
    { "Name": "Burger", "Price": 4, "Category": "Refrigerated foods" },
    { "Name": "Milk", "Price": 1.50, "Category": "the Snack isle" },
    { "Name": "Baking Powder", "Price": 1.50, "Category": "Home baking" },
    { "Name": "Cashew", "Price": 3, "Category": "Home baking" }
  ]


  displayProducts = []


  constructor() {
    this.getData();
  }


  scrollHandler(e) {
    if (e === 'bottom') {
      console.log(e)
      this.getData();
    }
  }

  getData() {
    let postData = {
      "Limit": 4,
      "Offset": this.offset
    }

    let newOffset = this.offset + postData.Limit;
    for (var i = this.offset; i < newOffset; i++) {
      if (this.products[i]) {
        this.displayProducts.push(this.products[i])
      }
    }
    this.offset = newOffset;
  }
}
