const Card = () => {
  return (
    <div className="relative cursor-pointer w-full flex flex-col gap-5 px-10 pt-10 pb-5 hover:bg-neutral-200 hover:dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-900">
      <div className="leading-5">
        <h3 className="dark:text-stone-100 text-stone-900">
          Bulma vs Tailwind
        </h3>
        <p className="text-stone-500 dark:text-stone-400">
          Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="flex">
        <div className="relative w-1/4 h-6 bg-orange-500 text-left px-4">
          15%{" "}
          <p className="absolute text-stone-500 dark:text-stone-400  left-0 bottom-[-1OO%]">
            Bulma
          </p>
        </div>
        <div className="relative w-3/4 h-6 bg-blue-300 text-right px-4">
          85%{" "}
          <p className="absolute text-stone-500 dark:text-stone-400  right-0 bottom-[-1OO%] ">
            Tailwind
          </p>
        </div>
      </div>
      <div className=" mt-5 flex gap-3 justify-start items-center text-stone-900 dark:text-stone-200">
        <div className="flex gap-1 justify-center items-center py-1  px-4 rounded-lg bg-stone-200 hover:bg-stone-300  dark:text-stone-200  dark:bg-stone-900 dark:hover:bg-stone-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span className="text-xs">0</span>
          <span className="text-xs">Comment</span>
        </div>
        <div className="flex gap-1 justify-center items-center py-1  px-4 rounded-lg bg-stone-200 hover:bg-stone-300   dark:text-stone-200  dark:bg-stone-900 dark:hover:bg-stone-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <span className="text-xs">0</span>
          <span className="text-xs">Vote</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
