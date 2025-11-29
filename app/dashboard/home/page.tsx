// dashboard/home/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="space-y-2">
        <div>
          <Link
            href="/dashboard/home/up"
            className="text-blue-600 hover:underline"
          >
            Go to /dashboard/home/up (Normal)
          </Link>
        </div>
        <div>
          <Link href="/up" className="text-green-600 hover:underline">
            Go to /up from home (INTERCEPTED)
          </Link>
        </div>
        <div>
          <Link href="/upup" className="text-purple-600 hover:underline">
            Go to /upup from home (INTERCEPTED)
          </Link>
        </div>
      </div>
    </div>
  );
}
