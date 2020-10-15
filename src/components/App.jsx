import React from "react";
import emojipedia from "../emojipedia";
import EmojiDic from "./EmojiDic";

const emojiSet = (list) => {
  return (
    <EmojiDic img={list.emoji} name={list.name} description={list.meaning} />
  );
};

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiSet)}</dl>
    </>
  );
}

export default App;
