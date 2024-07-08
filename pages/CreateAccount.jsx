export default function CreateAccount() {
  const singUpOptions = [
    { icon: "💬", text: "Sign up with Apple" },
    { icon: "💬", text: "Sign up with Facebook" },
    { icon: "💬", tetx: "Sign up with Forem" },
    { icon: "💬", text: "Sign up with GitHub" },
    { icon: "💬", text: "Sign up with Google" },
    { icon: "💬", text: "Sign up with Twitter (X)" },
    { icon: "💬", text: "Sign up with Email" },
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
              <div className="p-4 m-3 w-full border border-red-600" key={`option-${idx}`}>
                {option.icon} {option.text}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
