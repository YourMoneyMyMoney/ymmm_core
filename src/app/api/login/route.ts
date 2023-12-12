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
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30s") 
      .sign(getJwtSecretKey());
    response = JSON.stringify(
      { 
        success: true, 
        status: 200, 
        headers: { "content-type": "application/json" },
        cookies: {
          name: "token",
          value: token,
          path: "/",
        }
      }
    );
  }

  return new Response(response);
}

