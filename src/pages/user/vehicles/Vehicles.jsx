import DataTable from 'react-data-table-component'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import AddIcon from '../../../assets/svgs/AddIcon'
import Title from '../../../components/shared/title/Title'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const columns = [
  {
    name: 'Vehicle name',
    selector: (row) => row.vehicleName
  },
  {
    name: 'Brand',
    selector: (row) => row.brand
  },
  {
    name: 'Car Registration',
    selector: (row) => row.carRegistration
  },
  {
    name: 'Assign to',
    selector: (row) => row.assignTo
  },
  {
    name: 'Project',
    selector: (row) => row.project
  },
  {
    name: 'Action',
    selector: () => (
      <div className="cursor-pointer">
        <HiOutlineDotsVertical fontSize={22} />
      </div>
    )
  },
]

const data = [
  {
    id: 1,
    vehicleName: 'Golf',
    brand: 'Volkswagen',
    carRegistration: 'DA 1432',
    assignTo: 'Not Assigned',
    project: 'NA',
    action: ''
  },
  {
    id: 2,
    vehicleName: 'Civic',
    brand: 'Honda',
    carRegistration: 'CIV 5678',
    assignTo: 'John Doe',
    project: 'Project X',
    action: ''
  },
  {
    id: 3,
    vehicleName: 'Mustang',
    brand: 'Ford',
    carRegistration: 'MST 9101',
    assignTo: 'Jane Smith',
    project: 'Project Y',
    action: ''
  },
  {
    id: 4,
    vehicleName: 'Accord',
    brand: 'Honda',
    carRegistration: 'ACD 2345',
    assignTo: 'Emily Johnson',
    project: 'Project Z',
    action: ''
  },
  {
    id: 5,
    vehicleName: 'Camry',
    brand: 'Toyota',
    carRegistration: 'CMY 6789',
    assignTo: 'Michael Brown',
    project: 'Project A',
    action: ''
  },
  {
    id: 6,
    vehicleName: 'F-150',
    brand: 'Ford',
    carRegistration: 'F150 3456',
    assignTo: 'Sarah Davis',
    project: 'Project B',
    action: ''
  },
  {
    id: 7,
    vehicleName: 'Model S',
    brand: 'Tesla',
    carRegistration: 'TS 7890',
    assignTo: 'David Wilson',
    project: 'Project C',
    action: ''
  },
  {
    id: 8,
    vehicleName: '328i',
    brand: 'BMW',
    carRegistration: '328 1122',
    assignTo: 'Laura Martinez',
    project: 'Project D',
    action: ''
  },
  {
    id: 9,
    vehicleName: 'Q5',
    brand: 'Audi',
    carRegistration: 'Q5 3344',
    assignTo: 'Daniel Lee',
    project: 'Project E',
    action: ''
  },
  {
    id: 10,
    vehicleName: 'Cherokee',
    brand: 'Jeep',
    carRegistration: 'CHR 5566',
    assignTo: 'Sophia Walker',
    project: 'Project F',
    action: ''
  }
]

const Vehicles = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Projects" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <AddIcon />
          </div>
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
  )
}

export default Vehicles

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
  cells: {
    style: {
      color: 'rgba(17, 17, 17, 1)',
      fontSize: '14px'
    }
  }
};
