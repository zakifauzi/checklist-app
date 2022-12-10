import React, { useState, useEffect } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Add = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full text-left -ml-10 -mt-36 -mb-8"></div>
      <div
        id="createRoom"
        className="lg:text-4xl md:text-3xl text-2xl text-[#F97316] flex justify-center font-bold lg:my-16 md:my-15 my-10"
      >
        Create Room
      </div>

      <div className="flex justify-center">
        <div className="border shadow-md lg:w-[60%] md:w-[70%] w-[90%] mb-16 rounded-lg">
          <form
            // onSubmit={(e) => handleSubmit(e)}
            className="lg:my-16 md:my-15 my-10"
          >
            <div className="space-y-3 flex flex-col lg:w-[80%] md:w-[80%] w-[90%] m-auto">
              <Input
                id="createRoomName"
                type="text"
                label="Name"
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-10">
              <Button
                id="btnCreateRoom"
                className={`bg-[#F97316] text-white font-bold py-2 px-14 border border-white rounded-lg hover:shadow-md hover:shadow-gray-400 ${"bg-orange-200 cursor-not-allowed"}`}
                label="Create"
                // loading={loading || disabled}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
