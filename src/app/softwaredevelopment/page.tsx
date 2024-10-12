import Image from "next/image";
import Header from "../components/header";
import SoftwareDevelopmentImage from "@/app/images/softwareDevelopment.jpg";

export default function Software() {
  return (
    <div className="bg-purple-300 h-[100%] flip-animation">
      

      <div
        className="w-full sm:w-[70%] items-center justify-center grid m-auto text-center font-sans font-bold italic sm:tracking-normal 
              text-[50px] sm:text-[120px] flip-animation"
      >
        Art of Software Development
        <p className="sm:text-[60px] text-[35px] ">
          Trends, Tools, and Best Practices
        </p>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto">
        <div>
          <Image
            className="w-[100%] m-auto sm:w-full h-[200px] sm:h-[400px] rounded-3xl mt-11 mb-11 flip-animation"
            src={SoftwareDevelopmentImage}
            alt="Software Developmant"
          ></Image>
        </div>
      </div>

      <div className="w-[90%] sm:w-[70%] items-center m-auto text-[20px] sm:text-[40px] pb-9">
        <p className="text-justify">
          Software development is the driving force behind the digital
          transformation we experience today. From web apps and mobile
          applications to cloud computing solutions, software is what powers
          businesses and connects users to their needs. In this blog, we’ll
          explore the latest trends, tools, and best practices in the world of
          software development and how they’re shaping the future of technology.
        </p>
        <h1 className="text-[35px] sm:text-[60px] font-bold pt-8 pb-4 sm:pb-8">
          Agile Development: Staying Flexible in a Fast-Paced World
        </h1>
        <p className="text-justify">
          In today's software landscape, agility is key. Agile development has
          become the gold standard for teams to stay adaptable, productive, and
          customer-focused. Unlike traditional methodologies like Waterfall,
          Agile allows for constant iteration, feedback loops, and
          cross-functional collaboration.
        </p>
        Key Principles of Agile:
        <ul>
          <li className="list-disc">
            <b>Iterative Development:</b> Breaking down work into manageable
            sprints or cycles.
          </li>
          <li className="list-disc">
            {" "}
            <b>Collaboration: </b> Frequent communication between developers,
            designers, and stakeholders.
          </li>
          <li className="list-disc">
            {" "}
            <b>Continuous Improvement: </b> Testing and refining the software
            throughout the development cycle.
          </li>
          <li className="list-disc">
            {" "}
            <b>Why It’s Popular:</b> Agile provides flexibility, allowing teams
            to make changes and improvements quickly, reducing the risk of
            project failure.
          </li>
        </ul>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
          Software Development in Healthcare{" "}
        </h2>
        <p className="text-justify">
          Healthcare is one of the industries most disrupted by AI. Predictive
          analytics powered by AI are improving patient outcomes, while robotic
          surgeries are becoming more precise, thanks to machine learning
          algorithms.
        </p>
        <br />
        <h2 className="text-[25px] sm:text-[40px] font-bold pt-5 pb-2 sm:pb-5">
          Software Development in Business
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
