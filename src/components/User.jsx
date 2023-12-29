function User() {
  return (
    <div className="inline-flex gap-3 items-center px-6 py-1 border border-gray-200 dark:border-gray-900">
      <img
        className="rounded-full"
        src="https://i.pravatar.cc/30"
        alt="profile-img"
      />
      <p className=" text-xs text-gray-900 dark:text-gray-200">User</p>
    </div>
  );
}

export default User;
