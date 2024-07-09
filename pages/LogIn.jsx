import {
  Apple,
  Email,
  Facebook,
  Forem,
  GitHub,
  Google,
} from "@/components/SVGS";

export default function LogIn() {
  const singUpOptions = [
    { icon: Apple(), text: "Continue with Apple" },
    { icon: Facebook(), text: "Continue with Facebook" },
    { icon: Forem(), text: "Continue with Forem" },
    { icon: GitHub(), text: "Continue with GitHub" },
    { icon: Google(), text: "Continue with Google" },
    { icon: "💬", text: "Continue with Twitter (X)" },
    { icon: Email(), text: "Continue with Email" },
  ];

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
         

         
          <section className="w-full mt-10">
            {" "}
            <div className="w-full mb-3 ">
              <form className="flex flex-col w-full" action="">
                <div>
                  <p>Email</p>
                  <input
                    className=" border  border-[#D4D4D4] rounded-lg w-full p-2"
                    type="email"
                  />
                </div>
                <div>
                  <p>Password</p>
                  <input
                    className=" border  border-[#D4D4D4] rounded-lg w-full p-2"
                    type="text"
                  />
                </div>
                <div className="flex justify-between">
                  <span>
                    <input type="checkbox" /> Remember me{" "}
                  </span>

                  <a className="text-[#415AE3] flex flex-end] " href="">
                    Forgot Password?
                  </a>
                </div>

                <button className="w-full bg-[#3B49DF] hover:bg-[#2F3AB2] p-4 rounded-lg my-6 text-[#F9CCD2]">
                  Log In
                </button>
              </form>
              <p></p>
            </div>
          </section>

          <div className="flex justify-center w-full  border-b pb-5 mb-9 border-[#E5E5E5]">
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
          <p className=" mb-20">New to DEV Community? <a className="text-[#3B49DF]" href="#">Create account</a></p>
        </div>
      </div>
    </main>
  );
}
