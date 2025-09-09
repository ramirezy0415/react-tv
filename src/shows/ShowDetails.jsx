import { useState } from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
/** Allows users to browse through the episodes of the given show */

export default function ShowDetails({ selectedShow }) {
  if (!selectedShow) {
    return (
      <section>
        <h2>Please select a TV show</h2>
      </section>
    );
  }

  const [selectedEpisodes, setselectedEpisodes] = useState(
    selectedShow.episodes
  );

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <section>
      <header>
        <h2>{selectedShow.name}</h2>
      </header>
      <div>
        <EpisodeList
          name={selectedShow.name}
          episodes={selectedEpisodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
