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

// ProductForm component for creating a new product
const ProductForm = observer(() => {
  const store = useStore();

  return (
    <Page title="Create Product">
      <Card sectioned>
        <Form>
          <FormLayout>
            <TextField label="Title" value={store.title} autoComplete="off" />
            <TextField
              label="Price"
              value={store.price}
              autoComplete="off"
              type="number"
            />
            <TextField
              label="Stock Quantity"
              value={store.stockQuantity}
              autoComplete="off"
              type="number"
            />
            <TextField
              label="Description"
              value={store.description}
              autoComplete="off"
              multiline={4}
            />
            <Button primary submit>
              Create Product
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
});

export default ProductForm;
