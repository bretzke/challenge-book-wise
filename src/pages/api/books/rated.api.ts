import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      rate: true,
      description: true,
      book: true,
      user: true,
      created_at: true,
    },
    take: 20,
    orderBy: {
      created_at: "asc",
    },
  });

  return res.json({ ratings });
}
