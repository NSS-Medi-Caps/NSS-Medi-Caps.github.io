import '../assets/main.css';
import { Link} from "react-router-dom";
function Home() {
  return (
    <div>
          <Link to="Volunteer">volunteer </Link>
          <Link to="Cap">camp </Link>
    </div>

  );
}

export default Home;