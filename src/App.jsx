/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [tvShowsList, setTvShows] = useState(tvShows);
  const [selectedTvShow, setselectedTvShow] = useState(tvShows);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          tvShowList={tvShowsList}
          selectedTvShow={selectedTvShow}
          setselectedTvShow={setselectedTvShow}
        />
      </header>
      <main>
        <ShowDetails selectedTvShow={selectedTvShow} />
      </main>
    </>
  );
}
