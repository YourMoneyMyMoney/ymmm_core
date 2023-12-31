import prisma from '@/app/lib/prisma';

export async function GET(request: Request) {
  const currencies = await prisma.currency.findMany();
  return new Response(JSON.stringify(currencies));
}

export async function OPTIONS(request: Request) {
  return new Response(JSON.stringify({status: 200}));
}