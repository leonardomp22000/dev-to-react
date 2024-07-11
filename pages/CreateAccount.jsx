import {
  Apple,
  Email,
  Facebook,
  Forem,
  GitHub,
  Google,
} from "@/components/SVGS";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

export default function CreateAccount() {
  const router = useRouter()
  const singUpOptions = [
    { icon: Apple(), text: "Sign up with Apple" },
    { icon: Facebook(), text: "Sign up with Facebook" },
    { icon: Forem(), text: "Sign up with Forem" },
    { icon: GitHub(), text: "Sign up with GitHub" },
    { icon: Google(), text: "Sign up with Google" },
    { icon: "💬", text: "Sign up with Twitter (X)" },
  ];
  const [logInShow, setLogInShow] = useState(false);

  return (
    <main className="min-h-screen  bg-[#FFFFFF]">
      <div className="flex justify-center content-start">
        <div className=" flex flex-col justify-center items-center">
          <img
            className="mt-8 mb-7 w-14"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
          />
          <h1 className="font-[Helvetica] font-bold text-3xl text-[#171717] ">
            Join the DEV Community
          </h1>
          <h5 className="font-[Helvetica] font-normal text-base text-[#404040]">
            DEV Community is a community of 1,725,559 amazing developers
          </h5>

          {singUpOptions.map((option, idx) => {
            return (
              <div
                className="cursor-pointer p-4 flex m-2 w-full border  border-[#D4D4D4] rounded-lg text-[Helvetica] font-normal text-sm hover:bg-[#F5F5F5]"
                key={`option-${idx}`}
              >
                {option.icon}
                <span className="flex justify-center items-center w-full">
                  {option.text}
                </span>
              </div>
             
            );
          })}
          <div className="cursor-pointer p-4 flex m-2 w-full border  border-[#D4D4D4] rounded-lg text-[Helvetica] font-normal text-sm hover:bg-[#F5F5F5]">
            {Email()}
            <Link className="flex justify-center items-center w-full" href="/CreateUserForm">
              Sign Up with email
            </Link>
          </div>
          <div className="flex justify-center w-full my-5 border-b pb-5 border-[#E5E5E5]">
            <p className="  text-[#828481] w-4/5 text-center  italic">
              By signing up, you are agreeing to our{" "}
              <a className="text-[#3B49DF]" href="#">
                privacy policy
              </a>
              ,{" "}
              <a className=" text-[#3B49DF]" href="#">
                terms of use
              </a>{" "}
              and{" "}
              <a className=" text-[#3B49DF]" href="#">
                code of conduct.
              </a>{" "}
            </p>
          </div>

          <p className="mb-16 text-[#242B32]">
            Already have an account?{" "}
            {/*<Link className=" text-[#3B49DF]" href="/LogIn">
              Log In
            </Link>*/}
           

            

          </p>
        </div>
      </div>
    </main>
  );
}
