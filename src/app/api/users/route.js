
import { connectDB } from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";


export async function GET(Request, Response) {
    await connectDB();
    
    const searchParams = Request.nextUrl.searchParams;
    const price = searchParams.get("price");
    const category = searchParams.get("category");
    const model = searchParams.get("model");
    console.log("Searchparameters", price, category, model);
    
    
    const users = await User.find({})
    return NextResponse.json(users);

}


export async function POST(request) {

    await connectDB();

    const { name, email } = await request.json();

    const newUser = await User({ name, email })
    await newUser.save()
    
    // const user = await User.create({ name, email });

    return Response.json(newUser, { status: 201 });
}

