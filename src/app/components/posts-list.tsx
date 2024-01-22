import { type Post } from "../types/database";
import PostCard from "./post-card";

export function PostLists({ posts }: { posts: Array<Post> }) {
  return (
    <>
      {posts?.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            content={post.content}
            user={post.user}
            created_at={post.created_at}
          />
        );
      })}
    </>
  );
}
