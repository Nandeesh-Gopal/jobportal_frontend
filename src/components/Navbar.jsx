import {useNavigate} from "react-router-dom";

function Navbar() {
  const navigate=useNavigate();
  return (
    <>
      <h1>Job Portal</h1>
      <button onClick={()=>navigate("/")}>Home</button>
      <button onClick={()=>navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
}

export default Navbar;
