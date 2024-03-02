import { useGetUsers } from "../hooks/queries/users.queries";

const Table = () => {
  const { data: users } = useGetUsers();

  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-100 text-sm bg-slate-500">
            Username
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-100 text-sm bg-slate-500">
            Email
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-bold text-gray-100 text-sm bg-slate-500">
            Role
          </th>
          <th className="px-4 text-center py-3 title-font tracking-wider font-bold text-gray-100 text-sm bg-slate-500">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td
              className="px-4 py-3 border-b text-gray-200 border-gray-700"
              colSpan={1}
            >
              {user.userName}
            </td>
            <td
              className="px-4 py-3 border-b text-gray-200 border-gray-700"
              colSpan={1}
            >
              {user.email}
            </td>
            <td
              className="px-4 py-3 border-b text-gray-200 border-gray-700"
              colSpan={1}
            >
              {user.roles}
            </td>
            {/* <td
            className="px-4 py-3 border-b border-gray-700"
            colSpan={2}
          >
            <button
              onClick={() => handleDelete(key.id)}
              className="ml-4 inline-flex items-center justify-center w-6 h-6 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none"
              title="Eliminar"
            >
              <img
                src={deleteIcon}
                className="w-3 h-3"
                alt="deleteIcon.svg"
              />
            </button>
            <button
              onClick={() => handleCopyPassword(key.password)}
              className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-slate-800 rounded-full hover:bg-slate-900 focus:outline-none"
              title="Copiar"
            >
              <img src={copyIcon} alt="Copy.svg" className="w-3 h-3" />
            </button>
            <button
              onClick={() => setEditModalId(key.id)}
              className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none"
              title="Editar"
            >
              <img src={editIcon} alt="Edit.svg" className="w-3 h-3" />
            </button>
            {editModalId === key.id && (
              <EditKey
                keyd={key}
                onEditSuccess={() => setEditModalId(null)}
              />
            )}
          </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
