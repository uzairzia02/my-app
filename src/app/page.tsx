import Image from "next/image";
import Header from "./components/header";
import news from "@/app/images/trends.webp";
import softwareDevelopment from "@/app/images/softwareDevelopment.jpg";
import aiImage from "@/app/images/ai.jpg";
import mobileDevelopmentImage from "@/app/images/mobile development.webp";
import devopsImage from "@/app/images/devops.jpg";
import ITImage from "@/app/images/network.jpg";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-purple-300 h-[100%] flip-animation">
      
      <div className="bg-purple-900 h-[150px] sm:h-[300px] grid flip-animation">
        <p className="text-white text-center text-[30px] sm:text-[100px] font-bold sm:font-extrabold italic tracking-[3px] sm:tracking-[10px]">
          Exploring the Future of Innovation
        </p>
        <p className="text-white text-center text-[20px] sm:text-[50px] font-bold italic tracking-[6px] sm:tracking-[19px]">
          Your Ultimate Guide to the Latest in Technology
        </p>
      </div>

      {/* blog display on the home Page */}

      {/* main div of blog summary on the home page */}
      <div className="h-auto grid sm:flex p-2 justify-between">
        {/* 1st blog */}

        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/news&trends"}>
            <div>
              <Image
                className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
                src={news}
                alt="News & trends"
              ></Image>

              {/* heading of the Blog */}
              <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
                Tech News & <br /> Trends
              </p>

              {/* Description of Blog */}

              <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
                Latest updates on emerging technologies, gadgets, and industry
                trends
              </p>
            </div>
          </Link>
        </div>

        {/* 2nd blog */}
        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer  mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/softwaredevelopment"}>
            <div>
              <Image
                className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
                src={softwareDevelopment}
                alt="software Development"
              ></Image>

              {/* heading of the Blog */}
              <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
                Software <br /> Development
              </p>

              {/* Description of Blog */}

              <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
                Programming languages, frameworks, and software development best
                practices.
              </p>
            </div>
          </Link>
        </div>

        {/* 3rd blog */}

        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer  mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/artificialintelligence"}>
          <div>
            <Image
              className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
              src={aiImage}
              alt="Artificial Intelligence"
            ></Image>

            {/* heading of the Blog */}
            <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
              Artificial <br />
              Intelligence
            </p>

            {/* Description of Blog */}

            <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
              AI breakthroughs, machine learning tutorials, and automation.
            </p>
          </div>
          </Link>
        </div>
        
      </div>

      <div className="h-auto grid sm:flex p-2 justify-between">
        {/* 4th blog */}
        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer  mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/mobileappdevelopment"}>
          <div>
            <Image
              className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
              src={mobileDevelopmentImage}
              alt="mobile Development"
            ></Image>

            {/* heading of the Blog */}
            <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
              Mobile <br /> Development
            </p>

            {/* Description of Blog */}

            <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
              Developing for iOS, Android, and cross-platform frameworks (React
              Native, Flutter).
            </p>
          </div>
          </Link>
        </div>

        {/* 5th blog */}
        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer  mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/devops"}>
          <div>
            <Image
              className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
              src={devopsImage}
              alt="devops & automation"
            ></Image>

            {/* heading of the Blog */}
            <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
              DevOps & <br /> Automation
            </p>

            {/* Description of Blog */}

            <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
              Continuous integration, delivery pipelines, and automation tools.
            </p>
          </div>
          </Link>
        </div>

        {/* 6th blog */}

        <div
          className="bg-purple-700 hover:bg-purple-500 h-[500px] sm:h-[650px] w-[80%] m-auto sm:w-1/4 rounded-[35px] duration-500 
        border-purple-700 border-[15px] grid hover:border-purple-500 hover:cursor-pointer  mb-3"
        >
          {/* 1st - news and trends section */}
          {/* image div */}
          <Link href={"/networkandinfrastructure"}>
          <div>
            <Image
              className="rounded-tl-[20px] rounded-tr-[20px] h-[250px] sm:h-[300px] w-full flip-animation"
              src={ITImage}
              alt="networking & infrastructure"
            ></Image>

            {/* heading of the Blog */}
            <p className="text-black text-[30px] sm:text-[45px] tracking-[2px] text-center font-mono font-bold">
              Networking & <br /> Infrastructure
            </p>

            {/* Description of Blog */}

            <p className="text-white text-[20px] sm:text-[30px] tracking-[2px] text-justify font-mono p-4 sm:p-7">
              Networking fundamentals, hardware, server management, and cloud
              networking.
            </p>
          </div>
          </Link>
        </div>
       
      </div>
     
    </div>
  );
}
