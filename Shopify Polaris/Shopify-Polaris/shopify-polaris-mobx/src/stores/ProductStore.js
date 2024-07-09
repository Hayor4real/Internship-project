// src/stores/ProductStore.js
import { makeAutoObservable, action } from "mobx";
import { createContext, useContext } from "react";

// ProductStore class for managing product form state
class ProductStore {
  title = "";
  price = "";
  stockQuantity = "";
  description = "";
  error = "";
  success = "";

  constructor() {
    makeAutoObservable(this, {
      handleChange: action,
      validate: action,
      handleSubmit: action.bound,
      setError: action,
      setSuccess: action,
    });
  }

  handleChange(field, value) {
    this[field] = value;
  }

  validate() {
    if (
      !this.title ||
      !this.price ||
      !this.stockQuantity ||
      !this.description
    ) {
      this.setError("All fields are required");
      return false;
    }
    if (isNaN(this.price) || isNaN(this.stockQuantity)) {
      this.setError("Price and Stock Quantity must be numbers");
      return false;
    }
    this.setError("");
    return true;
  }

  setError(message) {
    this.error = message;
    this.success = "";
  }

  setSuccess(message) {
    this.success = message;
    this.error = "";
  }
}
