import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
