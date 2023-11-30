import prisma from '@/app/lib/prisma';
import firebase_app from "@/app/lib/firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface RequestBody {
  email: string;
  password: string;
  platform: string;
}

const auth = getAuth(firebase_app);

// fetch user / all users
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  if(email === null) {
    const users = await prisma.user.findMany();
    return Response.json( users );
  } else {
    const user = await prisma.user.findUnique({ where: { email: email } });
    return Response.json({ user });
  }
}

// 1. Sign Up
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // 2. check email existing from postgressql
  const users = await prisma.user.findMany({where: {email: body.email}});
  if(users.length !== 0){
    return Response.json('Existing email, please use other email');
  }
  
  // 3. create user in firebase 
  let result = null, error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, body.email, body.password);
    // 4. create user in postgressql match by uid
    const user = await prisma.user.create({
      data: {
        uid: result?.user?.uid,
        email: body.email,
        platform: body.platform,
      },
    });
  } catch (e) {
      error = e;
      return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(result));
}