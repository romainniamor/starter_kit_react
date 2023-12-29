import ListHeader from "../../components/ListHedaer";
import Card from "../../components/card";

function PopularClash() {
  return (
    <div className="flex flex-col w-full">
      <ListHeader title={"Popular"} />
      <div className="flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PopularClash;
