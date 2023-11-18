import React, { useState } from "react";
import send from "../../assets/dashboard/send.png";
import attach from "../../assets/dashboard/attach.png";
import emoji from "../../assets/dashboard/emoji.png";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Input = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const addEmoji = (e) => {
    const sym = e.unified;
    const emojiApp = "0x" + sym;
    const emoji = String.fromCodePoint(emojiApp);
    setText(text + emoji);
  };
  return (
    <div className=" w-full bg-white relative">
      <div className="flex items-center gap-3 h-[60px] p-2">
        <button type="button" onClick={() => setShowEmoji(!showEmoji)}>
          <img src={emoji} alt="" className="w-8" />
        </button>
        <div className="w-full">
          <input
            type="text"
            name=""
            value={text}
            id=""
            className="w-full outline-none p-2 placeholder:font-light"
            placeholder="Write a message"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <input type="file" name="" id="file" className="hidden" />
          <label htmlFor="file">
            <img src={attach} alt="" className="w-7 hover:cursor-pointer" />
          </label>
          <button type="submit" className="text-wh">
            <img src={send} alt="" className="w-8" />
          </button>
        </div>
        {showEmoji && (
          <div className="absolute bottom-full left-0 z-20">
            <Picker
              set="twitter"
              data={data}
              emojiSize={20}
              previewPosition={"none"}
              onEmojiSelect={addEmoji}
              maxFrequentRows={2}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
