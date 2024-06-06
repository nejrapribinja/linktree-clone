import dynamic from "next/dynamic";
import Slider from "./Slider";
const AnalyzeContent = dynamic(() => import("./AnalyzeContent"));

const AnalyzeSection = () => {
  return (
    <>
      <div className="bg-analyzebg min-h-[100vh] flex justify-center items-center " id="home">
        <AnalyzeContent />
      </div>
      <div className="bg-analyzebg min-h-[100vh] flex justify-center items-center " id="home">
        <Slider />
      </div>
    </>
  );
};

export default AnalyzeSection;
