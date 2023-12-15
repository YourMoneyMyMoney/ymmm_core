import prisma from '@/app/lib/prisma'
import firebase_app from "@/app/lib/firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/app/lib/auth"; 

interface RequestBody {
  email: string;
  password: string;
  platform: string;
}

const auth = getAuth(firebase_app);

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
    return new Response(JSON.stringify(null));
  }
  
  //3. login by firebase auth
  let result = null, error = null;

  try {
    result = await signInWithEmailAndPassword(auth, body.email, body.password);
  } catch (e) {
    error = e;
    return new Response(JSON.stringify(error));
  }

  //4. create token
  let response;
  if(result){
    const token = await new SignJWT({
      email: body.email,
      name: user.name,
      uid: result.user.uid
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d") 
      .sign(getJwtSecretKey());
    response = JSON.stringify(
      { 
        token: token
      }
    );
  }
  return new Response(response);
}

export async function OPTIONS(request: Request) {
  return new Response(JSON.stringify({status: 200}));
}