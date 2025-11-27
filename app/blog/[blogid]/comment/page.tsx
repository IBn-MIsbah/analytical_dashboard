const Comments = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
  const comments = [
    { id: 1, comment: "first comment" },
    { id: 2, comment: "second comment" },
  ];

  const { blogid } = await params;
  return (
    <>
      <h1>Comments for {blogid} </h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}{" "}
      </ul>
    </>
  );
};

export default Comments;
