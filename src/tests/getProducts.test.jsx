import { describe, expect, it } from "vitest";
import { getProducts } from "../helpers/getProducts";

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

describe("getProducts", () => {
  it("should return products", async () => {
    const products = await getProducts();
    expect(products).to.be.an("array");
  });
});
