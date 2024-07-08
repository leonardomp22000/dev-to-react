import {
  AdvertiseOnDev,
  Contact,
  DEVChallenges,
  DEVShowcase,
  DevHelp,
  ForemShop,
  Home,
  Podscast,
  Tags,
  Videos,
} from "./SVGS";

export function Categories() {
  const menuItems = [
    { icon: Home(), text: "Home" },
    { icon: Podscast(), text: "Podscast" },
    { icon: Videos(), text: "Videos" },
    { icon: Tags(), text: "Tags" },
    { icon: DevHelp(), text: "DEV help" },
    { icon: ForemShop(), text: "Forem Shop" },
    { icon: AdvertiseOnDev(), text: "Advertise on DEV" },
    { icon: DEVChallenges(), text: "DEV Challenges" },
    { icon: DEVShowcase(), text: "DEV Showcase" },
    { icon: Contact(), text: "Contact" },
  ];
  return (
    <section className="flex flex-col w-full text-[#43424F] mt-6 gap-2 ">
      {menuItems.map((item, idx) => {
        return (
          <div className="flex w-full h-10 justify-start hover:bg-[#E2E3F3] hover:text-[#403DB8] hover:underline items-center p-4 rounded-md" key={`item-${idx}`}>
            <span className="mr-1">{item.icon}</span> 
            <span> <a href="#"> {item.text}</a></span>
            
          </div>
        );
      })}
    </section>
  );
}
