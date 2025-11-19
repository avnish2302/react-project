import { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "../api/users";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleCreate(data) {
    try {
      setCreating(true);
      const created = await createUser(data);
      setUsers((prev) => [created, ...prev]);
      setEditingUser(null);
    } catch (err) {
      alert("Create failed: " + err.message);
    } finally {
      setCreating(false);
    }
  }

  async function handleUpdate(id, data) {
    try {
      const updated = await updateUser(id, data);
      setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
      setEditingUser(null);
    } catch (err) {
      alert("Update failed: " + err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this user?")) return;
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="card">
      <div className="card-header">
        <h2>Users</h2>
        <button className="btn primary" onClick={() => setEditingUser({})}>
          + Add User
        </button>
      </div>

      {editingUser !== null && (
        <UserForm
          initialData={editingUser}
          onCancel={() => setEditingUser(null)}
          onSubmit={(data) =>
            editingUser.id
              ? handleUpdate(editingUser.id, data)
              : handleCreate(data)
          }
          submitting={creating}
        />
      )}

      <UserTable
        users={users}
        onEdit={(user) => setEditingUser(user)}
        onDelete={handleDelete}
      />
    </div>
  );
}
