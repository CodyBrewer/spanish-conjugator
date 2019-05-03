import miniData from "../../data/miniData";
import beginnerData from "../../data/beginnerData";
//need to get data from the api here to filter it out to create the levels
import React, { useContext } from "react";
import { VerbContext } from "../../Context/Store";

const VerbTensesFilters = props => {
  const [verbData] = useContext(VerbContext);

  const LevelOne = verbData.filter(
    verb =>
      verb.tense_english === "Present" && verb.mood_english === "Indicative"
  );

  const Two = verbData.filter(
    verb =>
      verb.tense_english === "Preterite" && verb.mood_english === "Indicative"
  );

  const LevelTwo = LevelOne.concat(Two);

  const LevelThree = verbData.filter(
    verb =>
      (verb.tense_english === "Present" &&
        verb.mood_english === "Indicative") ||
      (verb.tense_english === "Preterite" && verb.mood_english === "Indicative")
  );

  const Four = verbData.filter(
    verb =>
      verb.tense_english === "Present Perfect" &&
      verb.mood_english === "Indicative"
  );

  const LevelFour = LevelThree.concat(Four);

  const Five = verbData.filter(
    verb =>
      verb.tense_english === "Future" && verb.mood_english === "Indicative"
  );

  const LevelFive = LevelFour.concat(Five);

  const Six = verbData.filter(
    verb =>
      verb.tense_english === "Present Perfect" &&
      verb.mood_english === "Indicative"
  );

  const LevelSix = LevelFive.concat(Six);

  const FilterLevels = [
    LevelOne,
    LevelTwo,
    LevelThree,
    LevelFour,
    LevelFive,
    LevelSix
    // miniData
  ];
  return <div filterLevels={FilterLevels} />;
};
export default VerbTensesFilters;
