import PostCard from "./post-card";

export function PostLists({ posts }) {
  return (
    <>
      {posts?.map((post) => {
        return (
          <PostCard
            key={post.id}
            userFullName={post.user.raw_user_meta_data.full_name}
            userName={post.user.raw_user_meta_data.user_name}
            avatarUrl={post.user.raw_user_meta_data.avatar_url}
            content={post.content}
          />
        );
      })}
    </>
  );
}
