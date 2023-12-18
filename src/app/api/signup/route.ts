import prisma from '@/app/lib/prisma';
import { verifyJwtToken } from '@/app/lib/auth';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  email: string;
  password: string;
  name: string;
  platform: string;
}

// fetch user / all users
export async function GET(request: Request) {

  //token verified 
  var token = request.headers.get('token');
  if(!token) return new Response(JSON.stringify({status:400, error:'invalid token'}));
  const reqUser = await verifyJwtToken(token);
  if(!reqUser) return new Response(JSON.stringify({status:400, error:'invalid format token'}));
  
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  if(email === null) {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users));
  } else {
    const user = await prisma.user.findFirst({ where: {email: email, platform: 'ymmm'}});
    return new Response(JSON.stringify(user));
  }
}

// 1. Sign Up
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // 2. check email existing from postgressql
  const users = await prisma.user.findMany({where: {email: body.email, platform: body.platform}});
  if(users.length !== 0){
    return new Response(JSON.stringify('Existing email, please use other email'));
  }
  
  // 3. create user in firebase 
  let result = null, error = null;

  try {
    // 4. create user in postgressql match by uid
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        platform: body.platform,
        password: await bcrypt.hash(body.password, 10),
      },
    });
  } catch (e) {
      error = e;
      return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify({status:200, message:'login success'}));
}

export async function OPTIONS(request: Request) {
  return new Response(JSON.stringify({status: 200}));
}