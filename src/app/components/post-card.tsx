import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import Link from "next/link";
import { Post } from "../types/database";
import { DeleteButtonPost } from "./delete-button-post";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function PostCard({
  user,
  content,
  id: postId,
  created_at: createdAt,
}: Post) {
  const {
    raw_user_meta_data: {
      full_name: fullName,
      user_name: userName,
      avatar_url: avatarUrl,
    },
  } = user;
  const supabase = createServerComponentClient({ cookies });
  const {
    data: {
      user: sessionUser,
    },
  } = await supabase.auth.getUser();
  console.log(sessionUser?.id);

  const dateFormatter = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES", options);
  };

  return (
    <Card className="bg-transparent shadow-none border-b rounded-none border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {fullName}
            </h4>
            <div className="flex gap-2">
              <h5 className="text-small tracking-tight text-default-400">
                @{userName}
              </h5>
              <Link href={"/" + postId}>
                <h5 className="cursor-pointer hover:text-white transition text-small tracking-tight text-default-400">
                  {dateFormatter(createdAt)}
                </h5>
              </Link>
            </div>
          </div>
        </div>

        {
          sessionUser?.id === user.id
            ? <DeleteButtonPost postId={postId} />
            : ''
        }
        
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className="w-4 h-4" />
        </button>
        <button>
          <IconHeart className="w-4 h-4" />
        </button>
        <button>
          <IconRepeat className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
}
