import { Advertisement } from "@/components/Advertisement";
export function MainContent() {
  return (
    <section>
      <article className="w-full  bg-white rounded-md pt-5 p-5 min-h-screen">
        <div className=" flex justify-between">
          <span className="text-[#525252] text-sm ">
            👋 The next DEV Challenge is live
          </span>
          <div className="w-20 flex justify-around">
            <a
              className="w-8 h-8  text-center content-center text-[#090909] font-normal text-sm hover:bg-[#F6F6F6] font-[Helvetica]"
              href=""
            >
              ...
            </a>
            <a
              className="w-8 h-8  text-center content-center text-[#090909] font-normal text-sm hover:bg-[#F6F6F6] rounded-md font-[Helvetica]"
              href=""
            >
              x
            </a>
          </div>
        </div>

        <div className="w-full h-32 pt-4 px-10">
          <img
            className="rounded-lg "
            src="https://media.dev.to/cdn-cgi/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv8vfdvpqozr6h7ctfo6k.png"
            alt="ImgDevTo"
          />
          <h2 className=" text-[#171717] font-bold text-2xl font-[Helvetica] my-2">
            The Next DEV Challenge is Here 🚀
          </h2>
          <h3 className="text-[#171717] font-bold text-xl font-[Helvetica] my-2">
            Join us for the Wix Studio Challenge with Special Guest Judge Ania
            Kubów: $3,000 in Prizes!
          </h3>

          <p className="text-[#1C1C1C] font-[Helvetica] font-normal text-base">
            Running through July 07, the Wix Studio Challenge provides an
            opportunity to develop with one of the most popular and in-demand
            website building solutions the internet has to offer. There is one
            prompt for this challenge, and one way to win the entire $3,000
            prize pool. 🙀
          </p>
          <div className="flex mt-3">
            <a
              className="  items-center w-56 h-11 content-center no-underline text-base text-center  border border-[#4A57E1] rounded-md mr-6 text-[#4A57E1] hover:bg-[#3B49DF] hover:text-white hover:underline"
              href=""
            >
              Check out the prompt
            </a>
          </div>
        </div>
      </article>
      <article className=" mt-4">
      <Advertisement/>
      </article>
    </section>
  );
}
