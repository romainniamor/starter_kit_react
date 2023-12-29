import { useRouteError } from "react-router-dom";

export default function PageError() {
  const error = useRouteError();
  return (
    <div>
      <h1 className="text-red-600 text-5xl ">404 Error</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </div>
  );
}
