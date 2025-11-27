import { notFound } from "next/navigation";

const DashboardComponent = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (parseInt(id) > 100) {
    return notFound();
  }
  return <div>Dashboard Component {id}</div>;
};

export default DashboardComponent;
