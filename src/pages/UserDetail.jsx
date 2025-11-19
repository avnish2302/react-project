import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUser } from '../api/users';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchUser(id)
      .then(data => setUser(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <div className="card">User not found</div>;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{user.name}</h2>
        <Link to="/" className="btn">Back</Link>
      </div>

      <div className="card-body">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><strong>Address:</strong> 
          {user.address && `${user.address.suite}, ${user.address.street}, ${user.address.city}`}
        </p>
      </div>
    </div>
  );
}
