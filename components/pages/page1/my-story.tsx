export default function MyStory() {
  return (
    <section className="section-container  pt-0">
      <div className="max-w-5xl mx-auto ">
        <h2 className="section-title text-center mb-12">
           <span className="culture-text text-[70px]">My Story</span></h2>

      <div className="grid grid-cols-12 gap-8 items-center story-border">
  
  {/* 4 columns */}
  <img 
    src="/pic.webp" 
    alt="" 
    className="col-span-5"
  />

  {/* 8 columns */}
  <img 
    src="/Group1321316537.png" 
    alt="" 
    className="col-span-7 text-story"
  />

</div>

      </div>
    </section>
  )
}
