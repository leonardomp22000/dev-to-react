import { ArrowBtn } from "./SVGS";
export default function WelcomeCard() {
  const welcomeOptions = [
    { icon: "😊", option: "Join the Welcome thread", btn: ArrowBtn() },
    { icon: "✍🏾", option: "Write your first DEV Community post" },
    { icon: "💅🏼", option: "Customize your profile" },
  ];

  return (
    <section className="bg-[#3B49DF] px-11 py-8 rounded-lg ">
      <img
        className="w-[100px] h-[100px]"
        src="	https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8j7kvp660rqzt99zui8e.png"
        alt="LogoDevTo"
      />
      <h2 className="font-[Helvetica] font-extrabold text-4xl text-white my-2">
        You&#39;re now a part of the community!
      </h2>
      <p className="font-[Helvetica] font-medium text-sm text-[#BBC0F4]">
        SUGGESTED THINGS YOU CAN DO
      </p>
      <ul>
        {welcomeOptions.map((option, idx) => {
          return <li key={`option-${idx}`} className="bg-[#626DE5] flex justify-between p-5 my-4 rounded-lg hover:bg-[#7680E9]">
            <p className="font-[Helvetica] font-bold text-base text-white"><span>{option.icon}</span> {option.option}</p>
            {ArrowBtn()}
          </li>;
        })}
      </ul>
    </section>
  );
}
