import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { PostLists } from "./components/posts-list";
import { ComposePost } from "./components/compose-post";
import { getPosts } from "./actions/post.actions";
import { Suspense } from "react";
import PostCardSkeleton from "./components/post-card-skeleton";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const posts = await getPosts();

  return (
    <main className="felx-col my-2 flex min-h-screen flex-col items-center justify-between gap-2">
      <AuthButtonServer />
      <section className="mx-auto min-h-screen w-full max-w-[600px] border-l border-r border-white/50">
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <Suspense fallback={<PostCardSkeleton />}>
          <PostLists posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}
