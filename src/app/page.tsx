import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { Post } from "./types/database";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const response = await supabase
    .from("posts")
    .select("*, user:users(*)");

  const posts: Post[] = response.data ?? []

  return (
    <main className="flex min-h-screen felx-col items-center justify-between">
      <section className="max-w-[600px] min-w-[400px] mx-auto border-l border-r border-white/50 min-h-screen">
        <AuthButtonServer />
        <PostLists posts={posts} />
      </section>
    </main>
  );
}
