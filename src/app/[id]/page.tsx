import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PostCard from "../components/post-card";
import { cookies } from "next/headers";

export default async function Post({ params }: { params: { id: string } }) {
  const supabase = await createServerComponentClient({ cookies });
  const postId = params?.id;

  const post = await supabase
    .from("posts")
    .select(`*, user:users(*)`)
    .eq("id", postId);

  console.log(post);

  if (!post.data) throw new Error("Error");

  const { id, created_at, content, user } = post.data[0];

  return (
    <PostCard id={id} user={user} content={content} created_at={created_at} />
  );
}
