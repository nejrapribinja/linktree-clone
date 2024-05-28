import dynamic from "next/dynamic";
const ShareContent = dynamic(() => import("./ShareContent"));

const ShareSection = () => {
  return (
    <div className="bg-sharebg" id="home">
      <ShareContent />
    </div>
  );
};

export default ShareSection;
