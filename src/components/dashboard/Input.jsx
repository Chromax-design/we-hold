import React, { useState } from "react";
import send from "/icons/send.png";
import attach from "/icons/attach.png";
import emoji from "/icons/emoji.png";
import add from "/icons/add.png";
import remove from "/icons/remove.png";
import photo from "/icons/photo.png";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Input = ({
  message,
  setMessage,
  handleImageChange,
  handleDocChange,
  sendMessage,
}) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [addFile, setAddFile] = useState(false);
  const addEmoji = (e) => {
    const sym = e.unified;
    const emojiApp = "0x" + sym;
    const emoji = String.fromCodePoint(emojiApp);
    setMessage(message + emoji);
  };

  return (
    <div className=" w-full bg-white relative">
      <div className="flex items-center gap-3 h-[60px] p-2">
        <button type="button" onClick={() => setShowEmoji(!showEmoji)} className="max-sm:hidden">
          <img src={emoji} alt="" className="w-8" />
        </button>
        <div className="w-full">
          <input
            type="text"
            name=""
            id=""
            value={message}
            className="w-full outline-none p-2 placeholder:font-light"
            placeholder="Write a message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="file">
            <img
              src={addFile ? remove : add}
              alt=""
              className="w-8 hover:cursor-pointer"
              onClick={() => setAddFile(!addFile)}
            />
          </label>
          <button className="text-wh" onClick={sendMessage}>
            <img src={send} alt="" className="w-8" />
          </button>
        </div>
        {showEmoji && (
          <div className="absolute bottom-full max-sm:hidden left-0 z-20 max-w-full">
            <Picker
              data={data}
              emojiSize={20}
              previewPosition={"none"}
              onEmojiSelect={addEmoji}
              maxFrequentRows={2}
            />
          </div>
        )}

        {addFile && (
          <div className="absolute bottom-full right-2 z-20 max-w-sm bg-white rounded-md shadow-lg w-[200px] text-sm font-medium">
            <div className="cursor-pointer hover:bg-gray-50 p-3">
              <input
                type="file"
                name=""
                id="img"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
              <label htmlFor="img" className="  flex gap-3 items-center">
                <img src={photo} alt="" className="w-7 hover:cursor-pointer" />
                <span className="capitalize">photos</span>
              </label>
            </div>
            <div className="cursor-pointer hover:bg-gray-50 p-3">
              <input
                type="file"
                name=""
                id="doc"
                className="hidden"
                onChange={handleDocChange}
                accept=".pdf"
              />
              <label htmlFor="doc" className="flex gap-3 items-center">
                <img src={attach} alt="" className="w-7 hover:cursor-pointer" />
                <span className="capitalize">documents</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
