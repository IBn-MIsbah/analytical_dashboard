import { Metadata } from "next";

//-- needs to be exported so that the metadata can be rendered in the web page
export const metadata: Metadata = {
  title: "RESTapi",
  description: "Creating rest api with Next.js",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <div className="container mx-auto p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
