import { comments } from "../data";

export const GET = async (
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
};

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  // detructure id form awaited Promise
  const { id } = await params;

  // detructure body content from incoming request body request

  // const body = awa req.json()
  // const comment = body.comment
  const { comment: newComment } = await req.json();

  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].comment = newComment;
  return Response.json(comments[index]);
};

export const DELETE = async (
  _req: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) => {
  const { id } = await params;
  const index = comments.findIndex((c) => c.id === parseInt(id));
  const [deleted] = comments.splice(index, 1);
  return Response.json(deleted);
};
