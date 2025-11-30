import { NextRequest } from "next/server";
import { comments } from "./data";

// export const GET = async () => {
//   return Response.json(comments);
// };

export const POST = async (req: Request) => {
  const incomming = await req.json();
  const newComment = {
    id: comments.length + 1,
    comment: incomming.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
};

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((c) =>
        c.comment.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    : comments;

  return Response.json({
    data: filterComments,
    total: filterComments.length,
    hasQuery: !!query,
    query: query || null,
  });
};
