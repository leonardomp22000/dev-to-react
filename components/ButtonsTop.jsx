export function ButtonsTop() {
  return (
    <section className="flex justify-start w-full h-14 text-[black]   ">
      <a className=" text-lg content-center text-center rounded-md font-bold font-[Helvetica] hover:text-[#414FE0] hover:bg-[#FFFFFF] h-11 w-24 p-2 " href="#">Relevant</a>
      <a className="text-lg content-center text-center rounded-md  font-[Helvetica] hover:text-[#414FE0] hover:bg-[#FFFFFF] h-11 w-20 p-2 text-[#727272] " href="#"> Latest</a>
      <a  className="text-lg content-center text-center rounded-md  font-[Helvetica] hover:text-[#414FE0] hover:bg-[#FFFFFF] h-11 w-12 p-2 text-[#727272] "href="#">Top</a>
    </section>
  );
}
