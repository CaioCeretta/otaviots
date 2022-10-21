import { Seller, SellerProduct } from './seller';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log('Here is the', product.id, product.name, product.price);
        return;
      }
    }

    console.log('Product with the id ' + id + ' was not found');
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
