"use client";

import { IconTrash } from "@tabler/icons-react";
import { deletePost } from "../actions/post.actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";

export function DeleteButtonPost({ postId }: { postId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = async (postId: string) => {
    await deletePost(postId);
    setIsOpen(false);
  };

  return (
    <Popover
      placement="right"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger className="p-0 m-0">
        <Button className="min-w-fit cursor-pointer bg-transparent text-gray-400 hover:text-white">
          <IconTrash />
        </Button>
      </PopoverTrigger>
      <form action={() => deleteHandler(postId)}>
        <PopoverContent className="bg-red-500">
          <button type="submit" className="px-1 py-1">
            <div className="text-small font-bold">Delete post</div>
            <div className="text-tiny">This action is permanent</div>
          </button>
        </PopoverContent>
      </form>
    </Popover>
  );
}
