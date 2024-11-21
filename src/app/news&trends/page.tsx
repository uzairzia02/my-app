import Image from "next/image";
import Trends from "@/app/images/trends.webp";

export default function NewsTrends() {
  return (
    <div className="bg-purple-300 h-[100%] flip-animation">
      

      <div
        className="w-full sm:w-[70%] items-center justify-center grid m-auto text-center font-sans font-bold italic sm:tracking-widest 
            text-[50px] sm:text-[120px] flip-animation"
      >
        Tech News & Trends
        <p className="sm:text-[60px] text-[35px] ">
          The Future of Technology in 2024
        </p>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto">
        <div>
          <Image
            className="w-[100%] m-auto sm:w-full h-[200px] sm:h-[400px] rounded-3xl mt-11 mb-11 flip-animation"
            src={Trends}
            alt="Trends"
          ></Image>
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto text-[20px] sm:text-[40px] pb-9">
        <p className="text-justify">
          As we move deeper into 2024, technology continues to evolve at a rapid
          pace, shaping the way we live, work, and interact with the world. From
          artificial intelligence advancements to breakthroughs in blockchain,
          the future holds exciting developments. Lets take a look at some of
          the biggest tech trends that are defining this year.
        </p>

        <h1 className="text-[35px] sm:text-[60px] font-bold pt-8 pb-4 sm:pb-8">
          AI Dominates the Conversation
        </h1>
        <p className="text-justify">
          Artificial Intelligence (AI) is no longer just a buzzword; it is
          transforming every industry. In 2024, Generative AI tools like
          OpenAI iss GPT models are becoming more refined, impacting fields like
          content creation, customer service, and even code generation.
        </p>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
          AI in Healthcare{" "}
        </h2>
        <p className="text-justify">
          Healthcare is one of the industries most disrupted by AI. Predictive
          analytics powered by AI are improving patient outcomes, while robotic
          surgeries are becoming more precise, thanks to machine learning
          algorithms.
        </p>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
          AI in Business
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
