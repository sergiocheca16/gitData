import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const useGitHubSearch = () => {
    const dispatch = useDispatch();
  
    const handleSearch = async (username) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("Usuario no encontrado");
        }
        const data = await response.json();
        dispatch(setUser(data));
      } catch (error) {
        console.error("Error al obtener los datos:", error.message);
        alert(error.message);
      }
    };
  
    return { handleSearch };
  };
  
  export default useGitHubSearch;