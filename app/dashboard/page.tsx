// dashboard/page.tsx
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <div className="mt-4 space-y-2">
        <div>
          <Link
            href="/dashboard/home"
            className="text-blue-600 hover:underline"
          >
            Go to /dashboard/home (Normal)
          </Link>
        </div>
        <div>
          <Link href="/up" className="text-green-600 hover:underline">
            Go to /up (INTERCEPTED - will show modal)
          </Link>
        </div>
        <div>
          <Link
            href="/dashboard/upup"
            className="text-purple-600 hover:underline"
          >
            Go to /upup (INTERCEPTED - will show modal)
          </Link>
        </div>
        <div>
          <Link
            href="/dashboard/upup"
            className="text-blue-600 hover:underline"
          >
            Go to /dashboard/upup (Normal)
          </Link>
        </div>
      </div>
    </div>
  );
}
