import { comments } from "./data";

export const GET = async () => {
  return Response.json(comments);
};

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
