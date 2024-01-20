import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: posts } = await supabase.from("posts").select("*, user:users(*)");

  console.log(posts);

  return (
    <main>
      <AuthButtonServer />

      {posts?.map((post) => {
        return <PostCard
          key={post.id}
          userFullName={post.user.raw_user_meta_data.full_name}
          userName={post.user.raw_user_meta_data.user_name}
          avatarUrl={post.user.raw_user_meta_data.avatar_url}
          content={post.content}
        />;
      })}
    </main>
  );
}
