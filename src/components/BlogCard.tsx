import { Link } from "react-router-dom";

interface BlogCardType {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-slate-200 border-b w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="px-2 font-semibold text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="text-lg flex justify-center flex-col">
            <Circle />
          </div>
          <div className="px-2 font text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>

        <div className="pt-2 font-semibold text-xl mb-2">{title}</div>
        <div className="text-md mb-3">
          {`${content.slice(0, 100)}  ${+content.length >= 100 ? "..." : ""}`}
        </div>
        <div className="text-gray-500 font text-sm">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
