const DashboardComponent = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>Dashboard Component {id}</div>;
};

export default DashboardComponent;
