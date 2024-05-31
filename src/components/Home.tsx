import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center bg-gray-300">
        <div className="">
          <div className="flex justify-center text-4xl font-bold w-screen">
            Medium App
          </div>
          <div className="flex justify-center pt-10">
            <div>
              <Link
                to={"/signin"}
                className="text-xl underline text-gray-800 font-semibold px-4"
              >
                Sign In
              </Link>
            </div>
            <div>
              <Link
                to={"/signup"}
                className="text-xl underline text-gray-800 font-semibold px-4"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
