import CreateButton from "../components/CreateButton";

function ListHeader({ title }) {
  return (
    <div className="flex justify-between items-center mb-10 ">
      <div>
        <h1 className="dark:text-stone-100 text-stone-900 text-3xl">{title}</h1>
        <p className="text-stone-500 dark:text-stone-400">Which is the best?</p>
      </div>
      <CreateButton />
    </div>
  );
}

export default ListHeader;
