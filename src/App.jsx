import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Layout>
  );
}
