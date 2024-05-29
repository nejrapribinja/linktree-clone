import dynamic from "next/dynamic";
const ShareContent = dynamic(() => import("./ShareContent"));

const ShareSection = () => {
  return (
    <div className="bg-sharebg min-h-[100vh] flex justify-center items-center " id="home">
      <ShareContent />
    </div>
  );
};

export default ShareSection;
