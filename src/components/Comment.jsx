function Comment() {
  return (
    <div className="flex flex-col  my-2">
      <div className="flex justify-start items-center gap-1">
        <img
          className="rounded-full"
          src="https://i.pravatar.cc/25"
          alt="profile-img"
        />
        <p className="text-xs  text-stone-500 dark:text-stone-400">User name</p>
      </div>
      <p className="text-sm dark:text-stone-100 text-stone-900 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, maiores
        atque dolores dignissimos eveniet officiis! Eaque deserunt aut velit
        debitis!
      </p>
      <hr className="mx-8 my-3 dark:text-stone-900" />
    </div>
  );
}

export default Comment;
