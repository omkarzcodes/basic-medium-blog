import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-12 pt-12 px-10 w-full max-screen-xl ">
          <div className="md:col-span-8">
            <div className="text-5xl text-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on {"31 May 2024"}</div>
            <div className="pt-4">{blog.content}</div>
          </div>

          <div className="hidden md:col-span-4 md:block">
            <div text-slate-600 text-lg>
              Author
            </div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>

              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>

                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
