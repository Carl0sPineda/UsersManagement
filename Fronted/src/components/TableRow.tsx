import toast from "react-hot-toast";
import { useState } from "react";
import { useUpdateRole } from "../hooks/mutations/user.mutations";
import { UserInfo } from "../interfaces/user.interface";

interface TableRowProps {
  user: UserInfo;
}

const TableRow = ({ user }: TableRowProps) => {
  const [selectedRole, setSelectedRole] = useState("");

  const updateRoleMutation = useUpdateRole();

  const handleRoleChange = async () => {
    if (selectedRole) {
      try {
        await updateRoleMutation.mutateAsync({
          userName: user.userName,
          newRole: selectedRole,
        });
        toast.success("Role updated successfully!");
      } catch (error) {}
    }
  };

  return (
    <tr key={user.id}>
      <td
        className="px-4 py-3 border-b text-gray-100 border-gray-700"
        colSpan={1}
      >
        {user.userName}
      </td>
      <td
        className="px-4 py-3 border-b text-gray-100 border-gray-700"
        colSpan={1}
      >
        {user.email}
      </td>
      <td
        className="px-4 py-3 border-b text-gray-100 border-gray-700"
        colSpan={1}
      >
        {user.roles}
      </td>
      <td className="px-4 py-3 border-b border-gray-700" colSpan={1}>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border rounded-md p-1 bg-gray-200"
        >
          <option value="">Select Role</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
        <button
          onClick={handleRoleChange}
          className="inline-flex ml-2 items-center justify-center px-3 py-1 text-lg font-abhaya font-bold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
