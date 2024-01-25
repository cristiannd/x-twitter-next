"use client";

import { IconTrash } from "@tabler/icons-react";
import { deletePost } from "../actions/post.actions";

export function DeleteButtonPost({ postId }: { postId: string }) {
  return (
    <form action={() => deletePost(postId)}>
      <button
        type="submit"
        className="text-gray-400 hover:text-white cursor-pointer"
      >
        <IconTrash />
      </button>
    </form>
  );
}
