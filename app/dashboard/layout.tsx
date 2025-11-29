// dashboard/layout.tsx
export default function DashboardLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-sm p-4">
            <h1 className="text-xl font-bold">Dashboard Layout</h1>
          </nav>
          <div className="container mx-auto p-4">
            {children}
            {user}
          </div>
        </div>
      </body>
    </html>
  );
}
