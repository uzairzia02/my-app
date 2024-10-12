import Image from "next/image";
import Header from "../components/header";
import AiImage from "@/app/images/ai.jpg";

export default function ArtificialIntelligence() {
  return (
    <div className="bg-purple-300 h-[100%] flip-animation">
      

      <div
        className="w-full sm:w-[70%] items-center justify-center grid m-auto text-center font-sans font-bold italic sm:tracking-normal 
            text-[50px] sm:text-[120px] flip-animation"
      >
        Rise of Artificial Intelligence
        <p className="sm:text-[60px] text-[35px] ">
        Transforming the Future of Technology
        </p>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto">
        <div>
          <Image
            className="w-[100%] m-auto sm:w-full h-[200px] sm:h-[400px] rounded-3xl mt-11 mb-11 flip-animation"
            src={AiImage}
            alt="Trends"
          ></Image>
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto text-[20px] sm:text-[40px] pb-9">
        <p className="text-justify">
        At its core, Artificial Intelligence refers to the ability of machines and software systems to perform tasks that typically require human
        intelligence. This includes problem-solving, decision-making, language understanding, and even creativity. AI is powered by algorithms, 
        data, and machine learning models that enable systems to learn and improve over time.
        </p>

        <h1 className="text-[35px] sm:text-[60px] font-bold pt-8 pb-4 sm:pb-8">
          AI Dominates the Conversation
        </h1>
        <p className="text-justify">
          Artificial Intelligence (AI) is no longer just a buzzword; it’s
          transforming every industry. In 2024, Generative AI tools like
          OpenAI's GPT models are becoming more refined, impacting fields like
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
