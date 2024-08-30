const Content = () => {
  return(
    <>
      <section className="main_content min-h-915 pt-32 px-24 pb-64 gap-64 md:px-39 md:min-h-759 xl:px-165 xl:min-h-875">
        <div className="main_container flex flex-col gap-63 md:gap-49">
          <div className="number_container flex flex-col items-center">
            <div className="line w-[1px] bg-slate-300 h-85 md:h-100 xl:h-94">
            </div>
            <div className="circle w-56 h-56 rounded-full border-[1px] border-slate-300 flex justify-center items-center text-slate-600 font-black">
              01
            </div>
          </div>
          <div className="image_collage_container grid grid-cols-2 grid-row-2 gap-x-25 gap-y-24 md:grid-cols-4 md:grid-rows-1 md:gap-x-10 md:mt-17 xl:mt-14 xl:gap-x-30">
            <picture className="rounded-[8px] overflow-hidden">
              <img src="./assets/desktop/image-woman-in-videocall.jpg" alt="woman in videocall using web meet in a laptot" />
            </picture>

            <picture className="rounded-[8px] overflow-hidden">
              <img src="./assets/desktop/image-women-videochatting.jpg" alt="three woman in videocall using web meet in a smartphone" />
            </picture>

            <picture className="rounded-[8px] overflow-hidden">
              <img src="./assets/desktop/image-men-in-meeting.jpg" alt="men in videocall using web meet in a laptot" />
            </picture>

            <picture className="rounded-[8px] overflow-hidden">
              <img src="./assets/desktop/image-man-texting.jpg" alt="woman in videocall using web meet" />
            </picture>
          </div>
          <div className="text-content_container flex flex-col justify-center items-center gap-32">
            <div className="title flex flex-col justify-center items-center gap-23 md:gap-17 xl:gap-15">
              <h3 className="text-cyan-600 font-black leading-180 tracking-4 uppercase md:text-15 md:flex md:items-start md:tracking-[4.5px] xl:mt-30 xl:text-16">
                Built for modern use
              </h3>
              <h2 className="text-32 text-slate-900 leading-110 font-black text-center md:text-38 md:w-430 md:tracking-wide xl:text-40 xl:w-450 xl:tracking-normal">
                Smarter meetings, all in one place
              </h2>
              <p className="font-medium text-center leading-165 text-slate-600 mt-10 md:mt-17 md:w-580 xl:text-18 xl:mt-15 xl:w-520 xl:leading-145">
              Send messages, share files, show your screen, and record your meetings — all in one 
              workspace. Control who can join with invite-only team access, data encryption, and data export.
            </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
} 

export default Content