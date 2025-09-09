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

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <section>
      <div>
        <EpisodeList
          name={selectedShow.name}
          episodes={selectedShow.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
