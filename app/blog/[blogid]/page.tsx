// Correct: Using async/await to access params
export default async function Page({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) {
  // Await the params Promise
  const { blogid } = await params;

  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>
        Showing post with ID: <strong>{blogid}</strong>
      </p>
    </div>
  );
}
