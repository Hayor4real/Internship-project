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
  async handleSubmit() {
    if (this.validate()) {
      try {
        const payload = {
          title: this.title,
          price: Number(this.price),
          stockQuantity: Number(this.stockQuantity),
          description: this.description,
        };
        console.log("Request Payload:", payload);
        const response = await fetch("http://localhost:3333/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to create product");
        }

        const data = await response.json();
        this.setSuccess("Product created successfully");
      } catch (error) {
        this.setError("Failed to create product");
      }
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

const StoreContext = createContext(new ProductStore());

export const useStore = () => useContext(StoreContext);
