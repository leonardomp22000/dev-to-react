export function CreateAccountCard() {
    return(
       <section className="bg-white w-full p-4 rounded-md font-[Helvetica] h-80 flex flex-col justify-between">
        <h2 className="text-[#242424]  font-bold text-xl"> DEV Community is a community of 1,706,652 amazing developers</h2>
        <p className="text-[#725A5C] font-normal text-[16px]"> We are a place where coders share, stay up-to-date and grow their careers.</p>

        <div className="flex flex-col justify-center">
        <a className=" w-full h-10 border text-center content-center border-[#565AE0] text-[#565AE0] rounded-md mb-1 hover:bg-[#3B49DF] hover:underline hover:text-white" href="#">Create account</a>
        <a className="text-[#414472]  h-10 border border-none text-center content-center hover:bg-[#EBECFC] hover:text-[#353DBE] hover:underline rounded-md" href="#">Log In</a>
        </div>
        
       </section>
    )
    
}