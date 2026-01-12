export default function WhereGrowthBreaks() {
  return (
    <section className="section-container bg-white from-slate-900 to-slate-950">
      <h2 className="section-title text-center  text-black text-6xl">
        Why most companies get it <span className="text-wrong">wrong</span>
      </h2>

      <div className=" max-w-4xl mx-auto mb-12 growth-section">
        <div className="bg-growth-box typicalbox rounded-lg p-8 pt-13">
          <button className="m-auto typical-btn">Here’s the typical playbook</button>
          <img src="/Vector5932.png" alt="" className="vectorpng" />
          <ul className="typicaltext">
            <li><svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25757 1.35046L12.5024 11.8218L1.25757 21.3413" stroke="#0AD592" stroke-width="3.69075" className="mr-[5px]" /></svg> Hire aggressive reps</li>
            <li><svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25757 1.35046L12.5024 11.8218L1.25757 21.3413" stroke="#0AD592" stroke-width="3.69075" className="mr-[5px]" /></svg> Push for activity</li>
            <li><svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25757 1.35046L12.5024 11.8218L1.25757 21.3413" stroke="#0AD592" stroke-width="3.69075" className="mr-[5px]" /></svg> copy “best practices” from companies 10x your size</li>
            <li><svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25757 1.35046L12.5024 11.8218L1.25757 21.3413" stroke="#0AD592" stroke-width="3.69075" className="mr-[5px]" /></svg> chase growth at all costs</li>
          </ul>
        </div>

          <div className="works">
            It works. For a while...
          </div>
         <div className="bg-growth-box typicalbox rounded-lg p-8 pt-13">
          <button className="m-auto typical-btn">Then the cracks appear</button>
          <img src="/Vector5932.png" alt="" className="vectorpng" />
          <ul className="typicaltext">
            <li><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-7.2114e-05 16.7524L6.26659 8.28315L0.139532 -1.15757e-05H3.98639L8.15899 5.75477L12.2851 -1.15757e-05H16.1319L10.0049 8.28315L16.287 16.7524H12.4247L8.15899 10.8115L3.8623 16.7524H-7.2114e-05Z" fill="#B1AFAF"/></svg> Best reps leave</li>
            <li><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-7.2114e-05 16.7524L6.26659 8.28315L0.139532 -1.15757e-05H3.98639L8.15899 5.75477L12.2851 -1.15757e-05H16.1319L10.0049 8.28315L16.287 16.7524H12.4247L8.15899 10.8115L3.8623 16.7524H-7.2114e-05Z" fill="#B1AFAF"/></svg> Culture dies</li>
            <li><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-7.2114e-05 16.7524L6.26659 8.28315L0.139532 -1.15757e-05H3.98639L8.15899 5.75477L12.2851 -1.15757e-05H16.1319L10.0049 8.28315L16.287 16.7524H12.4247L8.15899 10.8115L3.8623 16.7524H-7.2114e-05Z" fill="#B1AFAF"/></svg> New hires don’t stick</li>
            <li><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-7.2114e-05 16.7524L6.26659 8.28315L0.139532 -1.15757e-05H3.98639L8.15899 5.75477L12.2851 -1.15757e-05H16.1319L10.0049 8.28315L16.287 16.7524H12.4247L8.15899 10.8115L3.8623 16.7524H-7.2114e-05Z" fill="#B1AFAF"/></svg> Growth flatlines</li>
          </ul>
        </div>
      </div>
      <div className="max-w-4xl m-auto grid-center mb-6  sm:text-2xl lg:text-4xl text-[#000000]">
        <p>
          {" "}
          System without culture = <span className="text-wrong">
            burnout
          </span>{" "}
        </p>
        <p>
          Culture without system = <span className="text-wrong">chaos</span>{" "}
        </p>
        <p>
          {" "}
          <span className="text-wrong">You need both</span>{" "}
        </p>
      </div>
    </section>
  );
}
