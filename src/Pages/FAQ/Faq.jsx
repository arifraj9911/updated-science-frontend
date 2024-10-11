import faqData from "./../../data/faqData";

const Faq = () => {
  console.log(faqData);

  return (
    <div className="font-poppins">
      {/* heading  */}
      <section className="mt-5">
        <h3 className="text-[#3758F9] text-base font-semibold">
          Frequently Asked Questions (FAQ)
        </h3>
        <h1 className="text-2xl lg:text-[40px] font-semibold mt-1 md:mt-2.5">
          FAQ’s about Science Academy
        </h1>
        <p className="text-[#637381] text-sm md:text-base max-w-2xl mt-1 md:mt-4">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </section>
      {/* faqs */}
      <section className="mt-6 md:mt-10 grid grid-cols-1 gap-4">
        {faqData?.map((faq) => (
          <div
            key={faq?.number}
            className="collapse collapse-plus border border-[#DFE4EA]"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-base md:text-lg font-medium flex gap-5">
              <span>{faq?.number}.</span>
              {faq?.question}
            </div>
            <div className="collapse-content">
              <p className="text-[#637381] border-t pt-3 text-sm md:text-base">
                {faq?.answer}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faq;
