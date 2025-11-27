// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyApp
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
