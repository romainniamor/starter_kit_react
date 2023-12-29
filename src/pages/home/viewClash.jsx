import { useParams, useLocation, useNavigate } from "react-router-dom";
import Comment from "../../components/Comment";

function ViewClash() {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-left mb-10 ">
        <h1 className="dark:text-stone-100 text-stone-900 text-3xl">
          Clash Title
        </h1>
        <p className="text-stone-500 dark:text-stone-400">Description </p>
      </div>
      <div className="flex">
        <div className="relative w-1/4 h-6 bg-orange-500 text-left px-4">
          15%{" "}
        </div>
        <div className="relative w-3/4 h-6 bg-blue-300 text-right px-4">
          85%{" "}
        </div>
      </div>
      <div className="w-full my-4 flex justify-between">
        <button className="text-stone-500 dark:text-stone-400  py-1  px-4 rounded-lg border-2 border-orange-500">
          Bulma
        </button>
        <button className=" text-stone-500 dark:text-stone-400  py-1  px-4 rounded-lg border-2 border-blue-300 ">
          Tailwind
        </button>
      </div>

      <div className=" grid grid-cols-2 w-full gap-3 my-10 ">
        <div className="text-left ">
          <div className="mt-10">
            <Comment />
            <Comment />
            <button className="text-stone-500 dark:text-stone-400  py-1  px-4 rounded-lg border-2 border-stone-500 dark:border-stone-400">
              Add Comment +
            </button>
          </div>
        </div>
        <div className="text-right">
          <div className="mt-10">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <button className="text-stone-500 dark:text-stone-400  py-1  px-4 rounded-lg border-2 border-stone-500 dark:border-stone-400">
              Add Comment +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewClash;
