import React from "react";
import { Link } from "react-router-dom";

export default function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className="actions">
        <button className="btn small" onClick={() => onEdit(user)}>
          Edit
        </button>
        <button className="btn danger small" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
