import { Link } from "react-router-dom";
import ListHeader from "../../components/ListHedaer";
import Card from "../../components/card";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <ListHeader title={"All Clashs"} />
      <div className="flex flex-col gap-2">
        <Link to="/clash">
          <Card />
        </Link>
      </div>
    </div>
  );
}

export default Home;
