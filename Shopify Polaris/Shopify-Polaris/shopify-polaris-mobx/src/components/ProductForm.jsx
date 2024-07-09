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
        {store.error && <Banner status="critical">{store.error}</Banner>}
        {store.success && <Banner status="success">{store.success}</Banner>}
        <Form onSubmit={store.handleSubmit}>
          <FormLayout>
            <TextField
              label="Title"
              value={store.title}
              onChange={(value) => store.handleChange("title", value)}
              autoComplete="off"
            />
            <TextField
              label="Price"
              value={store.price}
              onChange={(value) => store.handleChange("price", value)}
              autoComplete="off"
              type="number"
            />
            <TextField
              label="Stock Quantity"
              value={store.stockQuantity}
              onChange={(value) => store.handleChange("stockQuantity", value)}
              autoComplete="off"
              type="number"
            />
            <TextField
              label="Description"
              value={store.description}
              onChange={(value) => store.handleChange("description", value)}
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
