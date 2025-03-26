import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value); 
  };

  const handleSearchClick = () => {
    if (username.trim()) { 
      onSearch(username); 
    }
  };

  return (
    <div className='inputSearch'>
      <input
        type="text"
        placeholder="Buscar usuario en GitHub"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}

export default Search;