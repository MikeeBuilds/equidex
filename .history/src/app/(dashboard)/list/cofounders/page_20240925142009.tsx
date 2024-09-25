import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { coFoundersData, role } from "@/lib/data";
import Image from "next/image";

type Cofounder = {
  id: number;
  founder: string;
  builder: string;
  project: string;
  status: string;
};

const columns = [
  {
    header: "Founder",
    accessor: "founder",
  },
  {
    header: "Builder",
    accessor: "builder",
    className: "hidden md:table-cell",
  },
  {
    header: "Project",
    accessor: "project",
    className: "hidden lg:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const CoFounderListPage = () => {
  const renderRow = (item: Cofounder) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-dexPurpleLight"
    >
      <td className="p-4">{item.founder}</td>
      <td className="hidden md:table-cell">{item.builder}</td>
      <td className="hidden lg:table-cell">{item.project}</td>
      <td className="hidden lg:table-cell">{item.status}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="cofounder" type="update" data={item} />
              <FormModal table="cofounder" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Co-Founders</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-dexYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-dexYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="cofounder" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={coFoundersData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default CoFounderListPage;