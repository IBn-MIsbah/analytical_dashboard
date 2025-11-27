const Comment = async ({
  params,
}: {
  params: Promise<{ blogid: string; commentid: string }>;
}) => {
  const { blogid, commentid } = await params;
  return (
    <div>
      Comment for {blogid} <strong>{commentid}</strong>
    </div>
  );
};

export default Comment;
