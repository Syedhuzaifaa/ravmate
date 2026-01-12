export default function StillReading() {
  return (
    <section className="section-container  text-center bg-black">
      <div className="max-w-7xl mx-auto mb-12 reading-section">
        <img src="Group1321316460.png" alt="" className="lightimg" />
        <h2 className="section-title text-white text-[85px] mb-4 zi99">
          <span className="ready-text"> Still Reading ? </span> You're Ready
        </h2>
        <p className="section-subtitle my-12 max-w-2xl mx-auto subtitle">
          Look, if you’ve made it this far, you already know your sales process
          is broken. The question isn’t if you need to fix it – it’s where to
          start.
          <br />
          <br />
          Schedule a call. We’ll figure out what’s stuck, what to fix first, and
          whether this is even the right fit. I’ll be straight with you – that’s
          kind of my thing.
        </p>
      </div>
        <button className="m-auto lets-talk-btn">
          Lets talk{" "}
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.08208 14.1639H21.8362M21.8362 14.1639L14.7542 7.08197M21.8362 14.1639L14.7542 21.2459"
              stroke="black"
              stroke-width="1.77049"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
    </section>
  );
}
