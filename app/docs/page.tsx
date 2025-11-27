const Docs = async ({ params }: { params: Promise<{ docid: string }> }) => {
  const { docid } = await params;
  return <h1>Docs {docid} </h1>;
};

export default Docs;
