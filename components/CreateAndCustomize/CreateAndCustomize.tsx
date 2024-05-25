import dynamic from "next/dynamic";
const CreateAndCustomizeContent = dynamic(() => import("./CreateAndCustomizeContent"));

const CreateAndCustomize = () => {
  return (
    <div className="h-[100vh] bg-createbg" id="home">
      <CreateAndCustomizeContent />
    </div>
  );
};

export default CreateAndCustomize;
