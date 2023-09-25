import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const payload = { email, password };
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.message);
    }
    if (response.ok) {
      // Storing data in localstorage
      localStorage.setItem("curUser", JSON.stringify(data));

      // Updating context
      dispatch({ type: "LOGIN", payload: data });

      // Loding false
      setIsLoading(false);
      navigate("/");
    }
  };

  return { login, isLoading, error };
};
