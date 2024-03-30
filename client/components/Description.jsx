import { usePrompt } from "../layouts/PromptProvider";

const Description = () => {

  const { setSubjects, setTopics } = usePrompt()

  const handleAdd = (subject, topic) => {
    setSubjects((prevSubjects) => [...prevSubjects, subject]);
    setTopics((prevTopics) => [...prevTopics, topic]);
  
  };

  return (
    <div className="mt-auto w-4/5 h-80 overflow-hidden ">
      <div className="grid grid-cols-2 gap-1">
        <div onClick={()=>handleAdd("Psychology", "Cognitive Behavioral Therapy")} className="bg-white dark:bg-gray-800 p-3 w-full h-full rounded-lg shadow-md border border-black">
          <h3 className="font-semibold mb-2">
            Example Subject: Psychology, Topic: Cognitive Behavioral Therapy
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Explore the principles and techniques of CBT in treating various
            mental health disorders.
          </p>
        </div>
        <div onClick={()=>handleAdd("Physics", "Quantum Mechanics")} className="bg-white dark:bg-gray-800 p-3 w-full h-full rounded-lg shadow-md border border-black">
          <h3 className="font-semibold mb-2">
            Example Subject: Physics, Topic: Quantum Mechanics
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Delve into the fascinating world of quantum mechanics, from
            wave-particle duality to quantum entanglement.
          </p>
        </div>
        <div onClick={()=>handleAdd("Art History", "Renaissance Art")} className="bg-white dark:bg-gray-800 p-3 w-full  h-full rounded-lg shadow-md border border-black">
          <h3 className="font-semibold mb-2">
            Example Subject: Art History, Topic: Renaissance Art
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Examine the masterpieces of the Renaissance period and their
            cultural significance in shaping Western art.
          </p>
        </div>
        <div onClick={()=>handleAdd("Environmental Science", "Climate Change")}  className="bg-white dark:bg-gray-800 p-3 h-full rounded-lg shadow-md border border-black">
          <h3 className="font-semibold mb-2">
            Example Subject: Environmental Science, Topic: Climate Change
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Investigate the causes, impacts, and solutions to the global
            phenomenon of climate change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
