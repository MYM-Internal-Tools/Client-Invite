import { useState } from "react";
import Card from "./Card";
import CardLocked from "./CardLocked";
import Modal from "./Modal"; // Import the Modal component
import { useNavigate } from "react-router-dom";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable for modal
  const [newClientCreated, setNewClientCreated] = useState(false); // State variable for new client creation
  const navigate = useNavigate();

  const handleCreateClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setNewClientCreated(true); // Set the flag for new client creation
  };

  const handleNavigate = () =>{
    // navigate("/Client");
    // navigate(0);
    console.log("clicked");
  }

  return (
    <div>
      <div className="mt-2 mx-7"></div>
      <div className="min-h-screen bg-[#1F2125] border border-[#353B43] rounded-xl mx-8">
        <div className="p-2 flex justify-center items-center mx-7">
          <p className="flex-1 text-white text-xl font-bold montserrat">
            Clients
          </p>

          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block"
            onClick={handleCreateClick}
          >
            + Create New Client
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 mt-1"></hr>

        <div className="bg-[#1F2125]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 rounded-xl p-3 mx-3 mb-10">
            {/* Existing Card components */}
            <Card
              Name="Tissu Tushar"
              Description="Welcome to AgenciFlow, we're so excited for vou to be here! As with most things, taking the first steps is always the hardest so we've made it..."
              Process={60}
              Date="18th April 2023"
              onClick={() =>  console.log("this si clicked")}

            />
            <Card
              Name="Tissu Tushar"
              Description="Welcome to AgenciFlow, we're so excited for vou to be here! As with most things, taking the first steps is always the hardest so we've made it..."
              Process={60}
              Date="18th April 2023"
              onClick={() =>  handleNavigate() }
            />
            <Card
              Name="Tissu Tushar"
              Description="Welcome to AgenciFlow, we're so excited for vou to be here! As with most things, taking the first steps is always the hardest so we've made it..."
              Process={60}
              Date="18th April 2023"
              onClick={() =>  handleNavigate }
            />
            {/* Render the new CardLocked component if new client is created */}
            {newClientCreated && (
              <CardLocked
                Name="New Client"
                Description="New client description"
                Process={60}
                Date={new Date().toLocaleDateString()}
              />
            )}
          </div>
        </div>
      </div>

      {/* Render the modal conditionally */}
      {isModalOpen && (
       <Modal onClose={handleModalClose}>
          {/* Modal content */}
          {/* <h2>Create New Client</h2> */}
          {/* Additional content */}
          {/* <p>Enter client details here...</p> */}
        </Modal>
      )}
    </div>
  );
}

export default Body;
