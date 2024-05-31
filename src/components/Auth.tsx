import { SignupInput } from "@rajure/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const jwtToken = await response.data.userToken;
      localStorage.setItem("token", jwtToken);
      navigate("/blogs");
    } catch (e) {
      alert(`Error while ${type === "signin" ? "Sign in" : "Sign up"}`);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="font-extrabold text-3xl">
              {type === "signup" ? "Create an account" : "Log into account"}
            </div>
            <div className="text-slate-500 text-md">
              {type === "signin"
                ? "Don't have an account"
                : "Already have an account?"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="underline pl-2"
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          <div className="pt-8">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Omi Dot"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              ></LabelledInput>
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="omi123"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            ></LabelledInput>
            <LabelledInput
              label="Password"
              placeholder="123456"
              type="password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            ></LabelledInput>

            <button
              type="button"
              onClick={sendRequest}
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
