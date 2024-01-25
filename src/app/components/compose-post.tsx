"use client";

import { Avatar } from "@nextui-org/react";
import { addPost } from "../actions/post.actions";
import { RefObject, useRef } from "react";

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const ref = useRef<HTMLFormElement>(null);

  const formHandler = async (formData: FormData, ref: RefObject<HTMLFormElement>) => {
    await addPost(formData)
    ref?.current?.reset()
  }

  return (
    <form
      action={(formData) => formHandler(formData, ref)}
      className="flex flex-row space-x-4 p-4 border-white/30 border-y"
      ref={ref}
    >
      <Avatar radius="full" size="md" src={userAvatarUrl} />

      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className="w-full text-2x1 bg-black placeholder-gray-500 p-2"
          placeholder="¿Qué está pasando?"
        ></textarea>
        <button className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end">
          Postear
        </button>
      </div>
    </form>
  );
}
