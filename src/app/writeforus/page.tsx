export default function WriteForUs() {
    return (
      <div className="h-svh bg-purple-400">
        <div className="h-[80px] sm:h-[200px] ">
          <h1 className="text-[50px] sm:text-[150px] text-center font-extrabold font-mono italic tracking-[15px] sm:tracking-[30px]">
            WRITE FOR US
          </h1>
        </div>
        <div className="bg-purple-400 justify-center grid w-[100%] ">
          <div className="p-2 grid sm:p-5">
            <p className="font-mono sm:text-[40px]">
              Enter Your Name 
              <input className="border-black border-[2px] justify-center grid" />             
            </p>
          </div>

          <div className="p-2 grid sm:p-5">
            <p className="font-mono sm:text-[40px]">
              Enter Your Email Address 
              <input className="border-black border-[2px] justify-center grid" />             
            </p>
          </div>

          <div className="p-2 grid sm:p-5">
            <p className="font-mono sm:text-[40px]">
              Enter Your Topic 
              <input className="border-black border-[2px] justify-center grid" />             
            </p>
          </div>

          <div className="p-2 grid sm:p-5">
            <p className="font-mono sm:text-[40px]">
              Write for Us 
              <textarea className="border-black border-[2px] justify-center grid w-[100%] h-[100px]" />             
            </p>
          </div>
          <div className="flex items-center justify-center">
          <button className="bg-purple-600 hover:bg-purple-900 hover:text-white mb-2 w-[100px] sm:w-[200px] sm:h-[40px] sm:text-[20px] sm:tracking-[3px] sm:font-bold items-center flex justify-center rounded-[40px]">
            Submit
          </button>
          </div>






        </div>
      </div>
    );
}