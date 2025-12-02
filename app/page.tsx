import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard</h1>
      <div className="space-x-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          href="/dashboard"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
