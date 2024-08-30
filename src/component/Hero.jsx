const Hero = () => {
  return(
    <>
      <section className="hero min-h-640 pt-55 px-24 pb-32 overflow-hidden xl:min-h-488">
        <div className="hero_container flex flex-col gap-33 md:gap-31 xl:gap-28">
          <div className="hero_content flex flex-col justify-center items-center gap-6 xl:gap-27">
            <h1 className="text-slate-900 mt-200 text-40 font-black leading-110 text-center w-290 md:mt-381 md:text-48 md:w-350 md:leading-105 xl:text-64 xl:mt-52  xl:w-420">
              Group Chat for Everyone
            </h1>
            <p className="text-center text-slate-600 leading-160 font-medium md:w-448 xl:text-18 xl:w-550">
              Meet makes it easy to connect with others face-to-face 
              virtually and collaborate across any device.
            </p>
          </div>
          <div className="content_buttons flex flex-col justify-center items-center gap-4 md:flex-row">
            <a className="w-193 h-58 flex justify-center items-center font-black bg-cyan-600 rounded-[29px] hover:bg-cyan-600-2 focus:bg-cyan-600-2 active:bg-cyan-600-2" tabIndex={0} role="button" href="#">
                <p className="text-white">Download
                  <span className="text-cyan-300"> v1.3</span>
                </p> 
            </a>
            <a className="w-139 h-58 flex justify-center items-center font-black bg-purple-600 rounded-[29px] hover:bg-purple-600-2 focus:bg-purple-600-2 active:bg-purple-600-2" tabIndex={0} role="button" href="#">
                <p className="text-white">
                  What is it?
                </p> 
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero