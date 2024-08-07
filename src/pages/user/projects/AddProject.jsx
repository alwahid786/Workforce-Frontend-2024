import Input from "../../../components/auth/Input";

const AddProject = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <h2 className="text[#111111] text-lg 2xl:text-[20px] font-semibold">
        Add Project
      </h2>
      <form className="mt-4 md:mt-6 lg:mt-8 grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Input
            label="Project Name"
            type="text"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Start Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Due Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-12">
            <label className="text-[#000] text-base mb-2 block font-semibold">Project Description</label>
            <textarea cols={12} rows={5} className="bg-[#7bc0f726] border border-[#e2e5ff] rounded-[14px] w-full focus:outline-none p-4" placeholder="Project Description"></textarea>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
