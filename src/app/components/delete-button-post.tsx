"use client";

import { deletePost } from "../actions/post.actions";

export function DeleteButtonPost({ postId }: { postId: string }) {
  return (
    <form action={() => deletePost(postId)}>
      <button type="submit">Delete</button>
    </form>
  );
}
