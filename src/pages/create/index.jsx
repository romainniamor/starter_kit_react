function Create() {
  const inputStyle = () => {
    return "mt-1 border bg-transparent border-neutral-200 dark:border-neutral-900 rounded-md py-3 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500";
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-left mb-10 ">
        <h1 className="dark:text-stone-100 text-stone-900 text-3xl">
          New Clash
        </h1>
        <p className="text-stone-500 dark:text-stone-400">Define it!</p>
      </div>
      <form className="relative w-full p-10 flex flex-col gap-5   rounded-md border border-neutral-200 dark:border-neutral-900">
        <label className="flex flex-col">
          Description{" "}
          <input
            className={inputStyle()}
            type="text"
            name="description"
            placeholder="Describe the context, case, use or else..."
          />
        </label>
        <label className="flex flex-col">
          Choice no1{" "}
          <input
            className={inputStyle()}
            type="text"
            name="firstChoice"
            placeholder="Your first choice..."
          />
        </label>
        <label className="flex flex-col">
          Choice no2{" "}
          <input
            className={inputStyle()}
            type="text"
            name="secondChoice"
            placeholder="Your second choice..."
          />
        </label>
        <button className="mt-5 text-stone-100 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
