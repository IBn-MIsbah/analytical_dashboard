// dashboard/home/(..)up/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function UpIntercept() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          🔄 Route Intercepted!
        </h2>
        <p>
          You tried to go to <code>/up</code> but were intercepted!
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This shows as a modal instead of navigating away.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}
