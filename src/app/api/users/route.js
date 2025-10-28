
import { connectDB } from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";


export async function GET(Request, Response) {
    await connectDB();

    const users = await User.find({})
    return NextResponse.json(users);

}


export async function POST(request) {

    await connectDB();

    const { name, email } = await request.json();
    
    const user = await User.create({ name, email });

    return Response.json(user, { status: 201 });
}

