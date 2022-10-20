import { useGlobalContext } from "./context";

export default function Buttons() {
  const { handlePage, page, nbPages, isLoading } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <h4>
        {page + 1} of {nbPages}
      </h4>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
}
