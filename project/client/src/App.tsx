import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useAppDispatch } from "./store/hooks";
import { getTokenFromLocalStoradge } from "./helpers/localstoradge.helper";
import { AuthService } from "./servises/auth.service";
import { login, logout } from "./store/user/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  const checkAutch = async () => {
    const token = getTokenFromLocalStoradge();
    try {
      if (token) {
        const data = await AuthService.getProfile();
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAutch();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
