import prisma from '@/app/lib/prisma';
import { verifyJwtToken } from '@/app/lib/auth';

interface RequestBody {
  bookId: number | undefined;
  title: string;
  currencyId: number;
}

// fetch all books
export async function GET(request: Request) {
  //token verified 
  var token = request.headers.get('token');
  if(!token) return new Response(JSON.stringify({status:404, error:'invalid token'}));
  const reqUser = await verifyJwtToken(token);
  if(!reqUser) return new Response(JSON.stringify({status:404, error:'invalid format token'}));
  
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('bookId');
  const userId = String(reqUser.userId);
  
  if(bookId === null) {
    const books = await prisma.userBook.findMany({ 
        select:{
            id: true,
            book: {
                select:{
                    id: true,
                    title: true,
                    currency:{}
                }
            },
        },
        where:{memberId: parseInt(userId)}
    });
    return new Response(JSON.stringify(books));
  } else {
    const book = await prisma.book.findUniqueOrThrow({
        select:{
            id: true,
            title: true,
            currency:{}
        },
        where:{id: parseInt(bookId)}
    });
    return new Response(JSON.stringify(book));
  }
}

// 1. Book 2. UserBook 
export async function POST(request: Request) {
  //token verified 
  var token = request.headers.get('token');
  if(!token) return new Response(JSON.stringify({status:404, error:'invalid token'}));
  const reqUser = await verifyJwtToken(token);
  if(!reqUser) return new Response(JSON.stringify({status:404, error:'invalid format token'}));
  
  // title, currency, author(token)
  const body: RequestBody = await request.json();

  // verify userId
  const userId = String(reqUser.userId);

  const user = await prisma.user.findUniqueOrThrow({where:{id:parseInt(userId)}});

  try{
    const book = await prisma.book.create({
      data:{
        title: body.title,
        currencyId: body.currencyId,
        userBooks:{
          create:{memberId:user.id}
        }
      }
    });
  }catch(e){
    return new Response(JSON.stringify({status:400, error: "book creation error"}));
  }
  return new Response(JSON.stringify({status:200, message:'userBook creation success'}));
}

export async function PUT(request: Request){
  //token verified 
  var token = request.headers.get('token');
  if(!token) return new Response(JSON.stringify({status:404, error:'invalid token'}));
  const reqUser = await verifyJwtToken(token);
  if(!reqUser) return new Response(JSON.stringify({status:404, error:'invalid format token'}));

  const body: RequestBody = await request.json();
  const bookId = body.bookId;
  const userId = String(reqUser.userId);
  if(bookId == null){
    return new Response(JSON.stringify({error: 'missing bookId'}));
  }
  const userBooks = await prisma.userBook.findMany({
    where: {
      memberId: parseInt(userId),
      bookId: bookId
    }});
  
  if(userBooks.length === 0){
    return new Response(JSON.stringify({error: 'no permission to access this book'}));
  }

  try{
    const book = await prisma.book.update({
      where:{
        id:bookId
      },
      data:{
        title: body.title,
        currencyId: body.currencyId
      }});
  }catch(e){
    return new Response(JSON.stringify({status:400, error: "book edit error"}));
  }
  return new Response(JSON.stringify({status:200, message: "book edit complete"}));
}

export async function DELETE(request: Request){
  //token verified 
  var token = request.headers.get('token');
  if(!token) return new Response(JSON.stringify({status:404, error:'invalid token'}));
  const reqUser = await verifyJwtToken(token);
  if(!reqUser) return new Response(JSON.stringify({status:404, error:'invalid format token'}));

  const body: RequestBody = await request.json();
  const bookId = body.bookId;
  const userId = String(reqUser.userId);

  if(bookId == null){
    return new Response(JSON.stringify({error: 'missing bookId'}));
  }
  const userBooks = await prisma.userBook.findMany({
    where: {
      memberId: parseInt(userId),
      bookId: bookId
    }});
  
  if(userBooks.length === 0){
    return new Response(JSON.stringify({error: 'no permission to access this book'}));
  }
  try{
    await prisma.userBook.deleteMany({where: {bookId: bookId}});
    await prisma.book.delete({where:{id:bookId}});
  }catch(e){
    return new Response(JSON.stringify({status:400, error: "book delete error"}));
  }
  return new Response(JSON.stringify({status:200, message: "book delete complete"}));
}

export async function OPTIONS(request: Request) {
  return new Response(JSON.stringify({status: 200}));
}