const slugs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return (
    <div>
      <h2>slugs </h2>
      <p>You are viewing: {slug ? slug.join(" / ") : "Home"}</p>
    </div>
  );
};

export default slugs;
