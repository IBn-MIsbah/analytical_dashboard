// dashboard/upup/page.tsx
import Link from "next/link";

export default function NormalUpUpPage() {
  return (
    <div className="p-8 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold">Normal UpUp Page</h1>
      <p className="text-gray-600">
        This is the normal page at <code>/dashboard/upup</code>
      </p>
      <Link
        href="/dashboard"
        className="text-blue-600 hover:underline mt-4 block"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
