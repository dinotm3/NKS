import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();

    navigate("/");
  }, []);

  return <h1>Logging out...</h1>;
};

export default Logout;
