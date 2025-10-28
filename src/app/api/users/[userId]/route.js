
import { connectDB } from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET({params}) {

  await connectDB();
  
  const {userId} = await params
  
  const user = await User.findOne({_id:userId});
  
  if(!user){
    return Response .json("No user found!")
  }
  return Response.json(user);
}
