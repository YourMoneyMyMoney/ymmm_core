import prisma from '@/app/lib/prisma';
import { verifyJwtToken } from '@/app/lib/auth';
import * as bcrypt from 'bcrypt';

interface RequestBody {
    email: string;
    password: string;
    name: string;
    platform: string;
}

export async function POST(request: Request) {
    // check password or username change 
    const { searchParams } = new URL(request.url);
    const field = searchParams.get('field') === 'password'? true: false;

    // check user existing
    const body: RequestBody = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        platform: body.platform
      },
    });

    if(!user){
      return new Response(JSON.stringify(null));
    }

    let updatedUser = null;

    if(field){
        try{
            updatedUser = await prisma.user.update({
                select:{
                    email: true,
                    name: true
                },
                where: {
                    id: user.id
                },
                data:{
                    password: await bcrypt.hash(body.password, 10),
                }
            });
        }catch(e){
            return new Response(JSON.stringify(e));
        }
    }else{
        try{
            var token = request.headers.get('token');
            if(!token) return new Response(JSON.stringify({status:404, error:'invalid token'}));
            const reqUser = await verifyJwtToken(token);
            if(!reqUser) return new Response(JSON.stringify({status:404, error:'invalid format token'}));
    

            if(reqUser.userId !== user.id){
                return new Response(JSON.stringify({error:'not authorization'}));
            }
            
            updatedUser = await prisma.user.update({
                select:{
                    email: true,
                    name: true
                },
                where: {
                    id: user.id
                },
                data:{
                    name: body.name
                }
            });
        }catch(e){
            return new Response(JSON.stringify(e));
        }
    }
    return new Response(JSON.stringify(updatedUser));
}
export async function OPTIONS(request: Request) {
    return new Response(JSON.stringify({status: 200}));
}