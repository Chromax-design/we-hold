import React from "react";
import MessageItem from "../../../components/dashboard/MessageItem";
import MessageHeader from "../../../components/dashboard/MessageHeader";
import Input from "../../../components/dashboard/Input";
import Messages from "../../../components/dashboard/Messages";


const MentorMessage = () => {
  return (
    <main className="bg-gray-50 p-4">
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-3 bg-white rounded-md shadow-md">
            <h2 className="capitalize font-semibold text-xl p-4">messages</h2>
            <hr />
            <div className=" py-3">
              <MessageItem />
            </div>
          </div>
          <div className=" col-span-9 bg-white rounded-md shadow-md relative h-[650px]">
            <MessageHeader />
            <Messages />
            <Input />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentorMessage;
