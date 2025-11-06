import { connectDB } from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import Product from "@/models/Product";

export async function GET(Request, Response) {
  await connectDB();
   
  
  const searchParams = Request.nextUrl.searchParams;
  const price = searchParams.get("price");
  const category = searchParams.get("category");
  const model = searchParams.get("model");
  const name = searchParams.get("name");
  const query = searchParams.get("query");

  const products = await Product.find(
     query ? {
          $or: [
            { category: { $regex: query, $options: "i" } },
            { model: { $regex: query, $options: "i" } }, 
            { name: { $regex: query, $options: "i" } },
          ],
        }
      : {}
  );



//   let filtered = products;

//   if (category) {
//     filtered = filtered.filter((p) => p.category === category);
//   }

//   if (model) {
//     filtered = filtered.filter((p) => p.model === model);
//   }

//   if (price) {
//     filtered = filtered.filter((p) => p.price <= Number(price));
//   }

//   if (name) {
//     filtered = filtered.filter((p) => p.name === name);
//   }

  //     let isMatch = true;
  //     if (price) {
  //       isMatch = isMatch && product.price <= Number(price);
  //     }
  //     if (category) {
  //       isMatch = isMatch && product.category === category;
  //     }
  //     if (model) {
  //       isMatch = isMatch && product.model === model;
  //     }
  //     if (name) {
  //       isMatch = isMatch && product.name === name;
  //     }
  //     return isMatch;
  //   });

  return NextResponse.json(products);
}

export async function POST(request) {
  await connectDB();

  const { name, category } = await request.json();

  const newProduct = await Product({ name, category });
  await newProduct.save();

  // const Product = await Product.create({ name, email });

  return Response.json(newProduct, { status: 201 });
}

//  const { searchParams } = new URL(req.url);
//   const category = searchParams.get("category");
//   const priceRange = searchParams.get("priceRange");

//   let filtered = products;

//   if (category) filtered = filtered.filter((p) => p.category === category);

//   if (priceRange) {
//     const [min, max] = priceRange.split("-").map(Number);
//     filtered = filtered.filter((p) => p.price >= min && p.price <= max);
//   }

//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");

//   const products = await Product.find(
//     query
//       ? {
//           $or: [
//             { name: { $regex: query, $options: "i" } },
//             { description: { $regex: query, $options: "i" } }, // optional
//           ],
//         }
//       : {}
//   );
