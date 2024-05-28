import dynamic from "next/dynamic";
const CreateAndCustomizeContent = dynamic(() => import("./CreateAndCustomizeContent"));

const CreateAndCustomize = () => {
  return (
    <div className=" bg-createbg" id="home">
      <CreateAndCustomizeContent />
    </div>
  );
};

export default CreateAndCustomize;
