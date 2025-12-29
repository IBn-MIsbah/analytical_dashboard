import { NextRequest } from "next/server";
import { comments } from "./data";
import { cookies, headers } from "next/headers";

// export const GET = async () => {
//   return Response.json(comments);
// };

export const POST = async (req: Request) => {
  const incomming = await req.json();
  const newComment = {
    id: comments.length + 1,
    comment: incomming.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
};

// export const GET = async (req: NextRequest) => {
//   const searchParams = req.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   const commentId = searchParams.get("id");
//   let filterComments = [...comments];
//   if (query) {
//     filterComments = query
//       ? comments.filter((c) =>
//           c.comment.toLocaleLowerCase().includes(query.toLocaleLowerCase())
//         )
//       : comments;
//   }

//   if (commentId) {
//     filterComments = commentId
//       ? comments.filter((c) => c.id === parseInt(commentId))
//       : comments;
//   }

//   return Response.json({
//     data: filterComments,
//     total: filterComments.length,
//     hasQuery: !!query,
//     query: query || null,
//     id: commentId || null,
//   });
// };

export const GET = async (req: NextRequest) => {
  // ===== ACCESSING REQUEST HEADERS =====

  // Method 1: Using NextRequest (your approach - fixed typo)
  const reqHeaders = new Headers(req.headers);
  const host = reqHeaders.get("host");
  console.log("Host:", host);

  // Method 2: Using headers() function (recommended for App Router)
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  console.log("User Agent:", userAgent);

  // ===== ACCESSING COOKIES =====

  // Method 1: Using NextRequest (read-only)
  const theme = req.cookies.get("theme");
  console.log("Theme cookie:", theme);
  // Output: { name: 'theme', value: 'dark' }

  // Method 2: Using cookies() function (can read/write)
  const cookieStore = await cookies();

  // Setting a cookie (this should be done in response, not here)
  // cookieStore.set("Custom-Cookie", "value");
  const incomingCookie = cookieStore.get("Custom-Cookie");
  console.log("Custom Cookie:", incomingCookie);

  // ===== PREPARE RESPONSE DATA =====
  const responseData = {
    data: comments,
    metadata: {
      total: comments.length,
      host: host,
      userAgent: userAgent,
      theme: theme?.value || "not-set",
    },
  };

  // ===== RETURN RESPONSE WITH HEADERS =====
  return Response.json(responseData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark; Path=/; HttpOnly; SameSite=Strict", // ✅ Proper cookie settings
      "X-Custom-Header": "custom-value",
      "Cache-Control": "public, max-age=60", // Add caching
    },
  });
};
