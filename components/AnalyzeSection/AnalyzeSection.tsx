import dynamic from "next/dynamic";
const AnalyzeContent = dynamic(() => import("./AnalyzeContent"));

const AnalyzeSection = () => {
  return (
    <div className="bg-analyzebg min-h-[100vh] flex justify-center items-center " id="home">
      <AnalyzeContent />
    </div>
  );
};

export default AnalyzeSection;
