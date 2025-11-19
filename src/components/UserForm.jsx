import { useState, useEffect } from "react";

export default function UserForm({
  initialData = {},
  onSubmit,
  onCancel,
  submitting,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    ...initialData,
  });

  useEffect(() => {
    setForm({ name: "", email: "", phone: "", ...initialData });
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Name & Email required");
    onSubmit(form);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-actions">
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn primary" disabled={submitting}>
          {submitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
