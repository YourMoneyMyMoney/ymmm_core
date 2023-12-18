import prisma from '@/app/lib/prisma'
import * as bcrypt from 'bcrypt';
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/app/lib/auth"; 

interface RequestBody {
  email: string;
  password: string;
  platform: string;
}

// 1. Login
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // 2. check email existing
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      platform: body.platform
    },
  });

  if(!user){
    return new Response(JSON.stringify({status:400, message:'no account'}));
  }
  // 3. compare pwd
  if (user && (await bcrypt.compare(body.password, user.password))) {
    //4. create token
    const token = await new SignJWT({
      email: body.email,
      name: user.name,
      platform: body.platform,
      userId: user.id
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d") 
      .sign(getJwtSecretKey());
    return new Response(JSON.stringify({token: token}));
  } else return new Response(JSON.stringify(null));
}

export async function OPTIONS(request: Request) {
  return new Response(JSON.stringify({status: 200}));
}