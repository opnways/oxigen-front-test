import { describe, expect, it } from "vitest";
import { addItemToCart } from "../helpers/addCart";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
// test vitest

describe("addCart", () => {
  it("addCart", async () => {
    // send params to the function addItemToCart
    const product = await addItemToCart({
      id: "AasKFs5EGbyAEIKkcHQcF",
      colorCode: "black",
      storageCode: "128",
    });

    expect(product).to.be.an("object");
    expect(product).to.have.property("data");
    expect(product.data).to.have.property("count");
  });
});
