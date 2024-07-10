const { validate } = use("Validator");
const Product = use("App/Models/Product");

class ProductController {
  async store({ request, response }) {
    const validation = await validate(request.all(), {
      title: "required|string",
      price: "required|number",
      stockQuantity: "required|number",
      description: "required|string",
    });

    if (validation.fails()) {
      return response.status(400).json({
        message: validation.messages(),
      });
    }

    const product = await Product.create(
      request.only(["title", "price", "stockQuantity", "description"])
    );
    return response.status(201).json(product);
  }
}

module.exports = ProductController;
