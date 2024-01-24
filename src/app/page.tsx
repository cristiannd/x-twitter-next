import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { type Post } from "./types/database";
import { ComposePost } from "./components/compose-post";
import { getPosts } from "./actions/post.actions";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const response = await getPosts()
  const posts: Post[] = response.data ?? [];

  return (
    <main className="flex flex-col min-h-screen felx-col items-center justify-between my-2 gap-2">
      <AuthButtonServer />
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/50 min-h-screen">
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostLists posts={posts} />
      </section>
    </main>
  );
}
