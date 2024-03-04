import { useGetUsers } from "../hooks/queries/users.queries";
import TableRow from "./TableRow";

const Table = () => {
  const { data: users } = useGetUsers();

  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 font-abhaya tracking-wider font-bold text-gray-100 text-xl bg-slate-700">
            Username
          </th>
          <th className="px-4 py-3 font-abhaya tracking-wider font-bold text-gray-100 text-xl bg-slate-700">
            Email
          </th>
          <th className="px-4 py-3 font-abhaya tracking-wider font-bold text-gray-100 text-xl bg-slate-700">
            Role
          </th>
          <th className="px-4 text-center py-3 font-abhaya tracking-wider font-bold text-gray-100 text-xl bg-slate-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
