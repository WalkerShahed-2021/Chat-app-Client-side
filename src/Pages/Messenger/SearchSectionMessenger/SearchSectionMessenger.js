
import React from "react";
import MainMessegeSection from "../MainMessegeSection/MainMessegeSection";

const SearchSectionMessenger = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 mt-10">
      <div className="row-span-3 col-span-2 h-[700px] bg-base-100 shadow-lg rounded-lg">
        <div>
          <div className="form-control text-center m-6">
           
            <input
              type="text"
              placeholder="Search People Or Messege"
              className="bg-[#F3F3F3] p-3 outline-none rounded"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 text-center">
          <div>Icon</div>
          <div>Icon1</div>
          <div>Icon3</div>
        </div>
        <div></div>
      </div>
      <div className="row-span-2 col-span-6 h-[700px]  bg-base-100">
        <MainMessegeSection></MainMessegeSection>
      </div>
      <div className="row-span-4 col-span-4 h-[700px] bg-base-100 shadow-lg rounded-lg"></div>
    </div>
  );
};

export default SearchSectionMessenger;
