export default function NavBarCreatePost() {
  return (
    <nav className="flex px-4 py-2 w-full justify-between">
      <div className="flex items-center gap-4 ">
        <img
          className="w-[50px] h-[40px]"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="LogoDevTo"
        />
        <span className="font-[Helvetica] font-medium text-base text-[#171717] ">
          Create Post
        </span>
      </div>
      <div className="flex items-center gap-4 font-[Helvetica] font-medium text-base text-[#171717]  ">
        <button >Edit</button>
        <button>Preview</button>
      </div>
      
    </nav>
  );
}
