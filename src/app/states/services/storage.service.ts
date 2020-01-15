import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
const STORAGE_ID = 'cart';
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(public storage: Storage) { }

    isAddedCard(productId) {
      return this.getCard().then(result => {
        return result && result.indexOf(productId) !== -1;
      });
    }
  
    addToCart(productId) {
      return this.getCard().then(result => {
        if (result) {
          result.push(productId);
          return this.storage.set(STORAGE_ID, result);
        } else {
          return this.storage.set(STORAGE_ID, [productId]);
        }
      });
    }
  
    remove(productId) {
      return this.getCard().then(result => {
        if (result) {
          var index = result.indexOf(productId);
          result.splice(index, 1);
          return this.storage.set(STORAGE_ID, result);
        }
      });
    }
  
    getCard() {
      return this.storage.get(STORAGE_ID);
    }

}