// src/stores/ProductStore.js
import { makeAutoObservable, action } from "mobx";
import { createContext, useContext } from "react";

// ProductStore class for managing product form state
class ProductStore {
  // Observable properties for form state
  title = "";
  price = "";
  stockQuantity = "";
  description = "";
  error = "";
  success = "";

  constructor() {
    // Make properties and methods observable
    makeAutoObservable(this, {
      handleChange: action, // Action to handle form field changes
      validate: action, // Action to validate form inputs
      handleSubmit: action.bound, // Bound action to handle form submission
      setError: action, // Action to set error message
      setSuccess: action, // Action to set success message
    });
  }

  // Action to handle form field changes
  handleChange(field, value) {
    this[field] = value;
  }

  // Action to validate form inputs
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

  // Bound action to handle form submission
  handleSubmit() {
    if (this.validate()) {
      // Simulate an API call
      setTimeout(() => {
        if (Math.random() > 0.5) {
          this.setSuccess("Product created successfully");
        } else {
          this.setError("Failed to create product");
        }
      }, 1000);
    }
  }

  // Action to set error message
  setError(message) {
    this.error = message;
    this.success = "";
  }

  // Action to set success message
  setSuccess(message) {
    this.success = message;
    this.error = "";
  }
}

// Create a context for the ProductStore
const StoreContext = createContext(new ProductStore());

// Hook to use the ProductStore context
export const useStore = () => useContext(StoreContext);
