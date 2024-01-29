"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });

export async function getPosts() {
  const response = await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false });

  return response.data ?? [];
}

export async function addPost(formData: FormData) {
  const content = formData.get("content");
  if (content === null) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user === null) return;

  await supabase.from("posts").insert({ content, user_id: user.id });
  revalidatePath("/");
}

export async function deletePost(postId: string) {
  await supabase.from("posts").delete().eq("id", postId);
  revalidatePath("/");
}
