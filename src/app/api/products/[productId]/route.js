
import { connectDB } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(request, { params }) {

  await connectDB();

  const { productId } = await params
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    return Response.json("No Product found!")
  }

  return Response.json(product);
}

export async function DELETE(request, { params }) {

  await connectDB();

  const { productId } = await params

  await Product.findByIdAndDelete(productId);

  return Response.json("Product deleted successfully");
}
