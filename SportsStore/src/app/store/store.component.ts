import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
   public selectedCategory: string | undefined = "";
   public productsPerPage = 4;
   public selectedPage = 1;

   constructor(private repository: ProductRepository) {} 

   get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
                          .slice(pageIndex, pageIndex + this.productsPerPage);
   }

   get categories(): (string | undefined) [] {
    return this.repository.getCategories();
   }

   changePage(newPage: number) {
    this.selectedPage = newPage;
   }

   changePageSize(event: any) {
    this.productsPerPage = Number(event.target.value);
    this.changePage(1);
   }

   changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
   }

   get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
   }

  /*get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1);
   }*/
}