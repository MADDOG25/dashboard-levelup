import { useRouteError } from "react-router-dom";

interface ErrorResponse {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  //Type Assertion Error
  const error = useRouteError() as ErrorResponse;
  console.log("🚀 ~ ErrorPage ~ error:", error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo siento, a ocurrido un error inexplicable</p>
      <p>
        <i>{error?.statusText || error?.message || "Error desconocido"}</i>
      </p>
    </div>
  );
}
