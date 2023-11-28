import prisma from '@/app/lib/prisma';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

// fetch user / all users
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if(id === null) {
    const users = await prisma.user.findMany();
    return Response.json( users );
  } else {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    return Response.json({ user });
  }
}

// create user
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const users = await prisma.user.findMany({where: {email: body.email}});
  if(users.length !== 0){
    return Response.json('Existing email, please use other email');
  }
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}