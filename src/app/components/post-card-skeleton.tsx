export default async function PostCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-4 p-3">
      <div className="flex gap-2">
        <div className="h-10 w-10 rounded-full bg-gray-500" />
        <div className="flex flex-col gap-2">
          <div className="h-5 w-36 rounded-full bg-gray-500" />
          <div className="flex gap-3 ">
            <div className="h-3 w-24 rounded-full bg-gray-500" />
            <div className="h-3 w-32 rounded-full bg-gray-500" />
          </div>
        </div>
      </div>
      <div className="h-3 w-64 rounded-full bg-gray-500" />
      <div className="flex gap-3">
        <div className="h-5 w-5 rounded-full bg-gray-500" />
        <div className="h-5 w-5 rounded-full bg-gray-500" />
        <div className="h-5 w-5 rounded-full bg-gray-500" />
      </div>
    </div>
  );
}
