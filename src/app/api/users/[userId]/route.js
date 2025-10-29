
import { connectDB } from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(request, { params }) {

  await connectDB();

  const { userId } = await params
  const user = await User.findOne({ _id: userId });

  if (!user) {
    return Response.json("No user found!")
  }

  return Response.json(user);
}

export async function DELETE(request, { params }) {

  await connectDB();

  const { userId } = await params

  await User.findByIdAndDelete(userId);

  return Response.json("User deleted successfully");
}
