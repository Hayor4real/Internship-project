import React from "react";
import { observer } from "mobx-react-lite";
import {
  Form,
  FormLayout,
  TextField,
  Button,
  Card,
  Page,
  Banner,
} from "@shopify/polaris";
import { useStore } from "../stores/ProductStore";

const ProductForm = observer(() => {
  const store = useStore();
  return <div>ProductForm</div>;
});

export default ProductForm;
