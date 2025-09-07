import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  tvShowList,
  selectedTvShow,
  setselectedTvShow,
}) {
  function handleClick(show) {
    return setselectedTvShow(show);
  }

  return (
    <nav className="shows">
      {tvShowList.map((show) => {
        return (
          <button key={show.name} onClick={() => handleClick(show)}>
            {show.name}
          </button>
        );
      })}
    </nav>
  );
}
