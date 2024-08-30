const Footer = () => {
  return(
    <>
      <div className="footer_container relative">
        <div className="number_container flex flex-col items-center z-10 relative">
          <div className="line w-[1px] bg-slate-300 h-82 md:h-99 xl:h-88">
          </div>
          <div className="circle w-56 h-56 rounded-full border-[1px] border-slate-300 flex justify-center items-center text-slate-600 font-black bg-white">
            02
          </div>
        </div>
        <div className="footer_content mt-[-28px] min-h-428 py-64 px-24 flex flex-col justify-center items-center xl:min-h-310">
          <div className="content cta w-full h-full absolute z-20 pt-94 pb-64 px-24 flex flex-col items-center gap-24 xl:flex-row xl:px-165 xl:pb-80 xl:gap-32 xl:pt-90 xl:justify-between">
            <h2 className="text-white text-32 font-black text-center leading-110 md:text-36 md:w-400 md:tracking-wider md:leading-120 xl:text-start xl:w-380">
              Experience more together
            </h2>
            <p className="text-white text-center w-280 font-medium leading-165 tracking-[0.5344px] md:mt-[5px] md:w-550 md:tracking-wider xl:text-start xl:mt-0 xl:w-345 xl:text-17 xl:leading-160 xl:tracking-wide">
              Stay connected with reliable HD meetings 
              and unlimited one-on-one and group video sessions.
            </p>
            <a className="w-193 h-58 flex justify-center items-center font-black bg-purple-600 rounded-[29px] mt-[7px] md:mt-17 xl:mt-0 hover:bg-purple-600-2 focus:bg-purple-600-2 active:bg-purple-600-2" tabIndex={0} role="button" href="#">
                <p className="text-white">Download
                  <span className="text-purple-300"> v1.3</span>
                </p> 
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer