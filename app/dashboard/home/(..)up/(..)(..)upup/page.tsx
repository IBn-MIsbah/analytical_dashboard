// dashboard/home/(..)(..)upup/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function UpUpIntercept() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-xl font-bold text-purple-600 mb-4">
          🔄🔄 Double Interception!
        </h2>
        <p>
          You tried to go to <code>/upup</code> but were intercepted from two
          levels up!
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This is the most powerful interception.
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
