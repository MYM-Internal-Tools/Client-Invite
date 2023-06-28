import React from "react";

function Modal({ onClose, children }) {

const handleSend= () =>{
    console.log("Hanle Send");
}

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="bg-[#121517] border border-[#353B43] rounded-lg p-6 z-30 w-[1200px]">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-center text-white text-[48px] font-medium">
            Invite your Client
          </div>
          <div className="w-[776px] text-center text-white text-sm font-light mt-5">
            Enter your client’s email address.
            <br />
            Once they accept your invitation, they will be added to the board.
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <input className="w-[90%] h-44 bg-[#1E2125] rounded-lg  hover:border-gray-300 focus:outline-none focus:shadow-outline focus:border-gray-300 text-white text-center text-xl"></input>
        </div>

        <div>
          <div className="flex justify-center items-center gap-5 my-5 mt-7">


          <button
              className="text-white px-20 py-3 rounded-md bg-[#1E2125] border border-gray-600"
              onClick={onClose}
            >
              Close
            </button>

            <button
              className="text-white px-16 py-3 rounded-md bg-blue-400"
              onClick={onClose}
            >
              Add Client
            </button>          

          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;
