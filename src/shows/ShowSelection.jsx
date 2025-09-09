import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  const handleClick = (item) => {
    setSelectedShow(item);
  };

  return (
    <nav className="shows-nav">
      {shows.map((show) => {
        return (
          <button
            onClick={() => handleClick(show)}
            key={show.name}
            type="button"
          >
            {show.name}
          </button>
        );
      })}
    </nav>
  );
}
