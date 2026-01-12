export default function WhereGrowthBreaks() {
  return (
    <section className="section-container bg-white from-slate-900 to-slate-950">
      <h2 className="section-title text-center  text-black text-6xl">
        Who we <span className="text-wrong">work</span> with
      </h2>
      <p className="saas">SaaS founders from pre-seed to Series B, usually at one of these two breaking points:</p>
      <div className=" max-w-6xl mx-auto my-12 growth-section ">
        <div className="flex gap-10 mb-20">
          <div className="bg-growth-box typicalbox4 rounded-lg p-8 pt-13">
            <button className="m-auto typical-btn4">$0 → $2M</button>
            <img src="/Vector5932.png" alt="" className="vectorpng4" />
            <div className="market">
              <h1>Product-market fit </h1> <br />
              <p>
                Now systemize sales and stop being the closer on every deal.
              </p>
            </div>

          </div>

          <div className="bg-growth-box typicalbox4 rounded-lg p-8 pt-13">
            <button className="m-auto typical-btn4">$2M → $10M+</button>
            <img src="/Vector5932.png" alt="" className="vectorpng4" />
            <div className="market">
              <h1>Product-market fit </h1> <br />
              <p>
                Now systemize sales and stop being the closer on every deal.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-growth-box typicalbox3 rounded-lg mt-20 p-8 pt-13">
          <button className="m-auto typical-btn3 mb-5">You’re a good fit if</button>
          <ul className="typicaltext">
            <li><img src="/Screenshot2241351.png" width={29} alt="" />You don't come from sales and need to build this right</li>
            <li><img src="/Screenshot2241351.png" width={29} alt="" />You care about revenue AND people (not one or the other)</li>
            <li><img src="/Screenshot2241351.png" width={29} alt="" />You want someone in the trenches, not a playbook consultant</li>
            <li><img src="/Screenshot2241351.png" width={29} alt="" />You're ready to build a foundation, not slap on a quick fix</li>
          </ul>
       
          <button className="m-auto typical-btn3 mb-5">This probably isn’t for you if</button>
          <ul className="typicaltext">
            <li><img src="/Screenshot22445.png" width={29} alt="" />You've got a big established sales org (just need optimization)</li>
            <li><img src="/Screenshot22445.png" width={29} alt="" />You're chasing growth at any cost (don't care about burnout) </li>
            <li><img src="/Screenshot22445.png" width={29} alt="" />You already have sales figured out (just need execution) </li>
            <li><img src="/Screenshot22445.png" width={29} alt="" />You're looking for a quick win (not a long-term foundation) </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
