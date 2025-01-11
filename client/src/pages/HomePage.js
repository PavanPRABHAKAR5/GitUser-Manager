

// import React, { useEffect, useState } from "react";

// import SearchInput from "../components/SearchInput";
// import { useLocation } from "react-router-dom";

// const HomePage = () => {
// const [username, setUsername] = useState('')
//   const location = useLocation();
 

//   useEffect(() => {
//     console.log(location.state)
//     if (location.state?.username) {
//       setUsername(location.state.username);
//       console.log(username)

//     }
//   }, [location.state]);
//   return (
//     <div>
//       <SearchInput user={username} onUsernameChange={setUsername}/>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";


const HomePage = () => {
  return (
    <div>
      <SearchInput />
    </div>
  );
};

export default HomePage;
