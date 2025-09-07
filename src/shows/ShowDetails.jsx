import { useState } from "react";
import "./shows.css";
// import EpisodeDetails from "../episodes/EpisodeDetails";
// import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ selectedTvShow }) {
  const [selectedTvShowEpisodes, setSelectedTvShowEpisodes] = useState(
    selectedTvShow.episodes
  );

  if (!selectedTvShow.name) {
    return <p>Please select a Tv Show from above</p>;
  }

  console.log(selectedTvShow.episodes);
  return (
    <section>
      <ul>
        {selectedTvShowEpisodes.map((episode) => {
          return <li key={episode.name}>{episode.name}</li>;
        })}
      </ul>
    </section>
  );
}
