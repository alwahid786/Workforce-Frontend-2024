import Title from "../../../components/shared/title/Title";
import AddIcon from "../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import { projectLabours } from "../../../data/data";
import DataTable from "react-data-table-component";
import CircularProgressBar from "../../../components/home/CircularProgressBar";
import DateIcon from "../../../assets/svgs/projects/DateIcon";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Project Name",
    cell: (row) => (
      <p className="text-sm text-[#111111] font-medium">{row.projectName}</p>
    ),
    width: "auto",
  },
  {
    name: "Start Date",
    cell: (row) => (
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Start Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row.startDate}
          </p>
        </div>
      </div>
    ),
    width: "220px",
  },
  {
    name: "Due Date",
    cell: (row) => ( 
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Due Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row.dueDate}
          </p>
        </div>
      </div>
    ),
    width: "220px",
  },
  {
    name: "Labours",
    cell: (row) => {
      const displayImages = row.labours.slice(0, 3);
      const extraCount = row.labours.length - displayImages.length;
      console.log("displayImages", displayImages);
      return (
        <div className="flex items-center">
          {displayImages.map((img, i) => (
            <img
              src={img.image}
              key={i}
              className="w-[35px] h-[35px] rounded-full object-cover ml-[-0.5rem]"
              alt="profile-pic"
            />
          ))}
          {extraCount > 0 && (
            <div className="w-[35px] h-[35px] rounded-full bg-[#d3d3d3] ml-[-0.5rem] text-base font-semibold text-[#000] flex items-center justify-center">
              {extraCount}+
            </div>
          )}
        </div>
      );
    },
    width: "150px",
  },
  {
    name: "Workforce Count",
    cell: (row) => (
      <div className="flex items-center justify-center h-full">
        <CircularProgressBar
          percentage={row.workforceCount}
          width="w-[40px]"
          height="h-[40px]"
          percentageSize="text-[10px]"
        />
      </div>
    ),
    width: "170px",
    center: true
  },
  {
    name: " Action",
    cell: () => (
      <div className="cursor-pointer">
        <HiOutlineDotsVertical fontSize={22} />
      </div>
    ),
    width: "100px",
    center: true
  },
];

const data = [
  {
    id: 1,
    projectName: "Workforce Project Number 1",
    startDate: "06 June 2024 - 12:00 PM",
    dueDate: "24 June 2024 - 12:00 PM",
    labours: projectLabours,
    workforceCount: "85",
    action: "action",
  },
  {
    id: 2,
    projectName: "Workforce Project Number 2",
    startDate: "07 June 2024 - 10:00 AM",
    dueDate: "25 June 2024 - 10:00 AM",
    labours: projectLabours,
    workforceCount: "75",
    action: "action",
  },
  {
    id: 3,
    projectName: "Workforce Project Number 3",
    startDate: "08 June 2024 - 09:00 AM",
    dueDate: "26 June 2024 - 09:00 AM",
    labours: projectLabours,
    workforceCount: "20",
    action: "action",
  },
  {
    id: 4,
    projectName: "Workforce Project Number 4",
    startDate: "09 June 2024 - 11:00 AM",
    dueDate: "27 June 2024 - 11:00 AM",
    labours: projectLabours,
    workforceCount: "45",
    action: "action",
  },
  {
    id: 5,
    projectName: "Workforce Project Number 5",
    startDate: "10 June 2024 - 08:00 AM",
    dueDate: "28 June 2024 - 08:00 AM",
    labours: projectLabours,
    workforceCount: "90",
    action: "action",
  },
  {
    id: 6,
    projectName: "Workforce Project Number 6",
    startDate: "11 June 2024 - 07:00 AM",
    dueDate: "29 June 2024 - 07:00 AM",
    labours: projectLabours,
    workforceCount: "15",
    action: "action",
  },
];

const Projects = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Projects" />
        </div>
        <div className="flex items-center gap-2">
          <Link to='/user/add-project'>
            <AddIcon />
          </Link>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
    </div>
  );
};

export default Projects;

const tableStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(17, 17, 17, 1)",
    },
  },
  rows: {
    style: {
      background: "rgba(123, 192, 247, 0.15)",
      borderRadius: "6px",
      padding: "14px 0",
      margin: "10px 0",
      borderBottomWidth: '0 !important'
    },
  },
};
