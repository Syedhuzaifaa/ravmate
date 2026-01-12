export default function StillReading() {
  return (
    <section className="section-container  text-center bg-black">
      <div className="max-w-7xl mx-auto mb-12 reading-section">
        <img src="Group1321316460.png" alt="" className="lightimg" />
        <h2 className="section-title text-white text-[85px] mb-4 zi99">
         You already know what’s broken. Let’s Fix It
        </h2>
        <p className="section-subtitle my-12 max-w-7xl mx-auto subtitle">
       You can keep trying to figure this out alone. Or you can book 30 minutes and <br /> we’ll map out exactly what’s stuck and how to fix it.   </p>
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
        <div className="free-text">
          Free. Honest. No Beating around the bush
        </div>
    </section>
  );
}
