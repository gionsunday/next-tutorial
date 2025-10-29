
import { connectDB } from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import Product from "@/models/Product";


export async function GET(Request, Response) {
    await connectDB();
    const products = await Product.find({})
    return NextResponse.json(products);

}


export async function POST(request) {

    await connectDB();

    const { name, category } = await request.json();

    const newProduct = await Product({ name, category })
    await newProduct.save()
    
    // const Product = await Product.create({ name, email });

    return Response.json(newProduct, { status: 201 });
}

