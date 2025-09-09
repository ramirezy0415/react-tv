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
    <nav className="shows">
      {shows.map((show) => {
        return (
          <a onClick={() => handleClick(show)} key={show.name} className="show">
            {show.name}
          </a>
        );
      })}
    </nav>
  );
}
