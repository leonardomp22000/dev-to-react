import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="bg-white w-full h-14 fixed border-b border-[#E0E0E0] flex justify-between items-center ">
      <div className="flex w-4/5 my-1">
        <img
        className="w-[3.1rem] mx-4"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="devToImg"
        />
        <input className="font-Helvetica text-base rounded-md basis-[60%] px-4 border border-[#A3A3A3] focus:border-2 focus:border-[#0000FF] focus:outline-none" type="text" placeholder="Search" />
      </div>

      <div  className="flex justify-end w-1/5 gap-2 font-Helvetica" >
        <Link className=" h-10 content-center no-underline text-[#505050] text-base text-center rounded-lg w-1/3 hover:bg-[#EBECFC] hover:text-[#2F3DB4] hover:underline"  href="/LogIn"> Log In </Link>
        <Link className="h-10 content-center no-underline text-base text-center w-2/4 border border-[#4A57E1] rounded-md mr-6 text-[#4A57E1] hover:bg-[#3B49DF] hover:text-white hover:underline"  href="/CreateAccount">Create account</Link>
      </div>
    </nav>
  );
}
