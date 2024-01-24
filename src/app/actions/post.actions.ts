"use server";

import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getPosts() {
  const supabase = createServerComponentClient({ cookies });
  const response = await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false });

  return response.data ?? [];
}

export async function addPost(formData: FormData) {
  const content = formData.get("content");
  if (content === null) return;

  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user === null) return;

  await supabase.from("posts").insert({ content, user_id: user.id });
  revalidatePath("/");
}

export async function deletePost(postId: string) {
  const supabase = createServerComponentClient({ cookies });
  await supabase.from("posts").delete().eq("id", postId);
  revalidatePath("/");
}
