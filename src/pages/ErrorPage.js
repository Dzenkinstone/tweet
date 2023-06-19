import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import image from "../000-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <div>
      <h1>Unknown address</h1>
      <img alt="123" src={image} />
    </div>
  );
};

export default ErrorPage;
