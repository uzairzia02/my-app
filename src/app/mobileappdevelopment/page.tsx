import Image from "next/image";
import Header from "../components/header";
import MobileAppDevelopmentImage from "@/app/images/mobile development.webp";

export default function MobileAppDevelopment() {
  return (
    <div className="bg-purple-300 h-[100%] flip-animation">
     

      <div
        className="w-full sm:w-[70%] items-center justify-center grid m-auto text-center font-sans font-bold italic sm:tracking-normal 
            text-[50px] sm:text-[93px] flip-animation"
      >
        Evolution of Mobile App Development
        <p className="sm:text-[60px] text-[35px]">
        Trends, Tools, and Future Prospects
        </p>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto">
        <div>
          <Image
            className="w-[100%] m-auto sm:w-full h-[200px] sm:h-[400px] rounded-3xl mt-11 mb-11 flip-animation"
            src={MobileAppDevelopmentImage}
            alt="Trends"
          ></Image>
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto text-[20px] sm:text-[40px] pb-9">
        <p className="text-justify">
        In the modern digital landscape, mobile applications have become an integral part of our daily lives. Whether it's social networking, 
        entertainment, banking, or e-commerce, mobile apps power nearly everything we do online. With the rapid growth of smartphones and the 
        demand for on-the-go services, mobile app development has evolved to meet the increasing needs of users worldwide. In this blog, we’ll 
        explore the latest trends, tools, and the future of mobile app development.


        </p>

        <h1 className="text-[35px] sm:text-[60px] font-bold pt-8 pb-4 sm:pb-8">
          Mobile development Dominates the Conversation
        </h1>
        <p className="text-justify">
        Mobile development is no longer just a buzzword; it’s
          transforming every industry. In 2024, Generative AI tools like
          OpenAI's GPT models are becoming more refined, impacting fields like
          content creation, customer service, and even code generation.
        </p>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
        Mobile development in Healthcare{" "}
        </h2>
        <p className="text-justify">
          Healthcare is one of the industries most disrupted by AI. Predictive
          analytics powered by AI are improving patient outcomes, while robotic
          surgeries are becoming more precise, thanks to machine learning
          algorithms.
        </p>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
        Mobile development in Business
        </h2>
        <p className="text-justify">
          Companies are embracing AI for tasks like predictive customer
          analysis, enhancing user experiences through personalization, and
          automating repetitive tasks with AI bots.
        </p>
      </div>
    </div>
  );
}
