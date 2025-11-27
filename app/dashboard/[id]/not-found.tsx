"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  return (
    <div>
      <h1>Page Not Found {path}</h1>
    </div>
  );
};

export default NotFound;
