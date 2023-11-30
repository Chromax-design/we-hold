import React from "react";
import { BASE_URL } from "../../config/config";
import pdf from "../../assets/icons/pdf.png";

const FilePreview = ({ file }) => {
  const fileUrl = `${BASE_URL}/chat/pdf/${file.docfileName}`;
  return (
    <a href={fileUrl} download={fileUrl} target="_blank">
      <div className="max-w-[150px] sm:max-w-[250px]">
        <img src={pdf} alt="" className="block mx-auto mb-3 max-w-[50px]" />
        <span className="text-xs">{file.docOriginalName}</span>
      </div>
    </a>
  );
};

const ImgPreview = ({ file }) => {
  const imgUrl = `${BASE_URL}/chat/image/${file}`;
  return (
    <a href={imgUrl} download="image" target="_blank">
      <img
        src={imgUrl}
        alt="chat-image"
        className="max-w-[150px] sm:max-w-[250px] h-auto rounded-lg cursor-pointer"
      />
    </a>
  );
};

const MessageCard = ({ user, message }) => {
  const time = new Date(message.time);

  const formatTimeDifference = (timestamp) => {
    const now = new Date();
    const timeDifference = now - timestamp;

    if (timeDifference < 0) {
      return "Just now";
    }

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} sec ago`;
    } else if (minutes < 60) {
      return `${minutes} min ago`;
    } else if (hours < 24) {
      return `${hours} hr ago`;
    } else if (days === 1) {
      return "yesterday";
    } else if (days > 1) {
      return `${days} days ago`;
    } else {
      return "just now";
    }
  };

  const formattedTime = formatTimeDifference(time);

  const isCurrentUser = user.firstName === message.author;

  return (
    <div
      className={`flex gap-3 mb-3 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-sm">
        {message.message && (
          <p
            className={`max-w-[max-content] ml-auto ${
              isCurrentUser ? "bg-lime-200" : "bg-lime-400"
            } p-3 text-sm shadow-sm ${
              isCurrentUser
                ? "rounded-s-xl rounded-br-xl"
                : "rounded-e-xl rounded-bl-xl"
            }`}
          >
            {message.message}
          </p>
        )}

        {message.imgFileName ? (
          <ImgPreview file={message.imgFileName} />
        ) : (
          ""
        )}

        {message.docfileName ? (
          <div className="bg-white p-4 rounded-md shadow-md">
            <FilePreview file={message} />
          </div>
        ) : (
          ""
        )}
        <span
          className={`${
            isCurrentUser ? "text-right" : "text-left"
          } text-xs block mt-2`}
        >
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default MessageCard;
