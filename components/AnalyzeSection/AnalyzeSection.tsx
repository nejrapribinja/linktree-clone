import dynamic from "next/dynamic";
import Slider from "./Slider";
const AnalyzeContent = dynamic(() => import("./AnalyzeContent"));

const AnalyzeSection = () => {
  return (
    <div className="bg-analyzebg" id="home">
      <AnalyzeContent />
      <Slider />
    </div>
  );
};

export default AnalyzeSection;
