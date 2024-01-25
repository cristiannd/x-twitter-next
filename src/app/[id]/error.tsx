"use client";

import { IconHome, IconRestore } from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const params = useParams();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Error - Post was not founded</h1>
      <p className="italic my-2 ">
        The post with id{" "}
        <span className="not-italic bg-slate-700 rounded px-1">
          {params?.id}
        </span>{" "}
        does not exist
      </p>
      <div className="flex gap-3">
        <Link
          className="cursor-pointer bg-sky-500 rounded w-fit p-2 text-white hover:bg-slate-300 transition flex gap-2"
          href="/"
        >
          <IconHome /> <span>Go home</span>
        </Link>
        <button
          className="cursor-pointer bg-slate-200 rounded w-fit p-2 text-black hover:bg-slate-300 transition flex gap-2"
          onClick={reset}
        >
          <IconRestore /> <span>Try again</span>
        </button>
      </div>
    </div>
  );
}
