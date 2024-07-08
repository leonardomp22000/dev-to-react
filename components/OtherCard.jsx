import { CodeOfConduct, PrivacyPolicy, TermsOfUse } from "./SVGS"

export function OtherCard() {
    const categories =[
        {icon:CodeOfConduct(), text: "Code of Conduct" },
        {icon: PrivacyPolicy(), text: "Privacy Policy" },
        {icon: TermsOfUse(), text: "Terms of use"}
    ]
    return(
        <section >
            <h3 className="text-[#242438] font-semibold ml-4 mt-6">Other</h3>
            {
                categories.map((item, idx) =>{
                    return(
                        <div className=" text-[#43424F] flex w-full h-10 justify-start hover:bg-[#E2E3F3] hover:text-[#403DB8] hover:underline items-center p-4 rounded-md" key={`itemOther-${idx}`}>
                            <span className="mr-1">{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    )
                })
            }
        </section>
    )
    
}