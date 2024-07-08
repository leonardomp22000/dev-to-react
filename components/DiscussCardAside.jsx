export function DiscussCardAside() {
  const questions = [
    { question: "Does TypeScrip fail at enums?", NumComments: "5 comments" },
    { question: "10000 Followers... Thank you!", NumComments: "5 comments" },
    { question: "What do you think of the look and feel", NumComments: "New" },
    {
      question: "Are you a Beginner, intermediate or Expert Programmer?",
      NumComments: "24 comments",
    },
    {
      question: "Is JavaScript Really Insecure as They Say?",
      NumComments: "New",
    },
  ];

  return (
    <section className="bg-white p-4">
      <section className="w-full flex flex-col py-3  border-b border-[#F5F5F5]">
        <a
          className="text-[#404652] font-semibold text-xl font-[Helvetica]"
          href=""
        >
          #discuss
        </a>
        <span className="font-normal font-[Helvetica] text-[#404040] text-xs ">
          Discussion threads targeting the whole community
        </span>
      </section>

      {questions.map((item, idx) => {
        return (
          <div
            className="w-full flex flex-col py-3  border-b border-[#F5F5F5]"
            key={`item-discuss-${idx}`}
          >
            <a
              className="text-[#404652] font-normal text-base font-[Helvetica]"
              href=""
            >
              {item.question}
            </a>
            <span className="font-normal font-[Helvetica] text-[#404040] text-xs  ">
              {item.NumComments}
            </span>
          </div>
        );
      })}
    </section>
  );
}

// #2f3ab2
