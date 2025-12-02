import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";

const DashboardLayout = ({
  main,
  navbar,
  sidebar,
}: {
  navbar: React.ReactNode;
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-screen">
        {/* Sidebar with Suspense for loading state */}
        <Suspense
          fallback={<div className="w-64 bg-gray-100">Loading sidebar...</div>}
        >
          {sidebar}
        </Suspense>

        <div className="flex-1 flex flex-col min-w-0">
          {" "}
          {/* min-w-0 prevents overflow */}
          {/* Navbar */}
          <nav className="bg-white border-b px-6 py-3">
            <Suspense fallback={<div>Loading navbar...</div>}>
              {navbar}
            </Suspense>
          </nav>
          {/* Main content area */}
          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="text-gray-500">Loading analytics...</div>
                </div>
              }
            >
              {main}
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
