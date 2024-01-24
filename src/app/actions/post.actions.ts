"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getPosts() {
  const supabase = createServerComponentClient({ cookies });
  return await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false });
}

export async function deletePost(postId: string) {
  const supabase = createServerComponentClient({ cookies });
  const response = await supabase.from("posts").delete().eq("id", postId);
  revalidatePath("/");
}
