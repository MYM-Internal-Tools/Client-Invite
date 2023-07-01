import { useState } from "react";

interface PersonProps {
    Name: string;
    Process: number;
    Description: string;
    Date: string;
      
}

function Card(props: PersonProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hide,setHide]= useState(false);

    const handleClose = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleHide = () =>{
        setHide(!hide);
    }

    return (
        <div className={`${hide? "hidden": " "}`}>
        <div className="relative w-[100%] sm:w-[314px] h-[314px] flex flex-col border border-zinc-700 rounded-md">
            <div className="relative w-[100%] h-[100%] sm:w-[314px] sm:h-[314px] bg-neutral-900 rounded-lg border border-zinc-700 flex flex-col">
                <div>
                    <div className="float-right relative mr-5 mt-5" style={{ zIndex: 20 }} onClick={handleClose}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6983 18.2236L13.2737 10.799L20.6983 3.37437C21.0265 3.04618 21.2109 2.60106 21.2109 2.13693C21.2109 1.6728 21.0265 1.22768 20.6983 0.899495C20.3701 0.571306 19.925 0.386932 19.4609 0.386932C18.9968 0.386932 18.5516 0.571306 18.2234 0.899495L10.7988 8.32412L3.37421 0.899495C3.04602 0.571306 2.6009 0.386932 2.13677 0.386932C1.67264 0.386932 1.22752 0.571306 0.899333 0.899495C0.571145 1.22768 0.386771 1.6728 0.386771 2.13693C0.386771 2.60106 0.571145 3.04618 0.899333 3.37437L8.32395 10.799L0.899333 18.2236C0.571145 18.5518 0.38677 18.9969 0.38677 19.461C0.38677 19.9252 0.571145 20.3703 0.899333 20.6985C1.22752 21.0267 1.67264 21.211 2.13677 21.211C2.6009 21.211 3.04602 21.0267 3.37421 20.6985L10.7988 13.2739L18.2234 20.6985C18.5516 21.0267 18.9968 21.211 19.4609 21.211C19.925 21.211 20.3701 21.0267 20.6983 20.6985C21.0265 20.3703 21.2109 19.9252 21.2109 19.461C21.2109 18.9969 21.0265 18.5518 20.6983 18.2236Z" fill="#FDFDFD" />
                        </svg>
                    </div>

                    <div className="flex items-center mt-5">
                        <div className="ml-4 text-white text-[24px] font-bold">
                            {props.Name}
                        </div>
                        <svg
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ zIndex: 11 }} // Set higher z-index for SVG
                        >
                            {/* SVG path */}
                        </svg>
                    </div>

                    <div className="flex-grow p-4 flex-1">
                        <div className="text-white text-[12px] font-normal">
                            {props.Description}
                        </div>

                        <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center" style={{ zIndex: 12 }}>
                            <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.8 45.1C31.5518 45.0854 30.329 45.4536 29.2963 46.1549C28.2636 46.8563 27.4706 47.8572 27.024 49.0229C26.5773 50.1886 26.4986 51.4632 26.7982 52.675C27.0979 53.8868 27.7616 54.9778 28.7 55.801V61.5C28.7 62.5874 29.132 63.6302 29.9009 64.3991C30.6698 65.168 31.7126 65.6 32.8 65.6C33.8874 65.6 34.9302 65.168 35.6991 64.3991C36.468 63.6302 36.9 62.5874 36.9 61.5V55.801C37.8384 54.9778 38.5021 53.8868 38.8018 52.675C39.1014 51.4632 39.0227 50.1886 38.576 49.0229C38.1294 47.8572 37.3364 46.8563 36.3037 46.1549C35.271 45.4536 34.0483 45.0854 32.8 45.1ZM53.3 28.7V20.5C53.3 15.0631 51.1402 9.84881 47.2957 6.00431C43.4512 2.15982 38.2369 0 32.8 0C27.3631 0 22.1488 2.15982 18.3043 6.00431C14.4598 9.84881 12.3 15.0631 12.3 20.5V28.7C9.03784 28.7 5.90928 29.9959 3.60259 32.3026C1.29589 34.6093 0 37.7378 0 41V69.7C0 72.9622 1.29589 76.0907 3.60259 78.3974C5.90928 80.7041 9.03784 82 12.3 82H53.3C56.5622 82 59.6907 80.7041 61.9974 78.3974C64.3041 76.0907 65.6 72.9622 65.6 69.7V41C65.6 37.7378 64.3041 34.6093 61.9974 32.3026C59.6907 29.9959 56.5622 28.7 53.3 28.7ZM20.5 20.5C20.5 17.2378 21.7959 14.1093 24.1026 11.8026C26.4093 9.49589 29.5378 8.2 32.8 8.2C36.0622 8.2 39.1907 9.49589 41.4974 11.8026C43.8041 14.1093 45.1 17.2378 45.1 20.5V28.7H20.5V20.5ZM57.4 69.7C57.4 70.7874 56.968 71.8302 56.1991 72.5991C55.4302 73.368 54.3874 73.8 53.3 73.8H12.3C11.2126 73.8 10.1698 73.368 9.40086 72.5991C8.63196 71.8302 8.2 70.7874 8.2 69.7V41C8.2 39.9126 8.63196 38.8698 9.40086 38.1009C10.1698 37.332 11.2126 36.9 12.3 36.9H53.3C54.3874 36.9 55.4302 37.332 56.1991 38.1009C56.968 38.8698 57.4 39.9126 57.4 41V69.7Z" fill="white" />
                            </svg>

                            <p className="text-white text-xs mt-5">Unlocks once the client accepts your invitation</p>
                        </div>

                        <div className="w-full h-[7px] bg-gray-800 rounded-md mt-[60px]">
                            <div className={`w-[${props.Process}%] h-1 bg-blue-500 rounded-md`} />
                        </div>
                        <div className="flex items-center mt-10">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://via.placeholder.com/24x24"
                                alt="Profile"
                            />
                            <div className="ml-2 text-white text-[12px] font-bold">
                                Created: {props.Date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-75 rounded-lg z-10" />

            <div className="absolute inset-0 bg-black opacity-75 rounded-lg z-10" />

      {/* Modal content */}
      {isModalOpen && (
        <div
          className="absolute inset-0 z-20 mx-auto my-auto p-4 rounded-lg "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 200,
          }}
        >
          <div
            className="bg-[#1E2125] w-[80%] h-[40%] mx-auto my-auto p-4 rounded-lg  mt-20"
            style={{ backgroundColor: "rgba(30, 33, 37, 1)" }}
          >
            {/* Add your modal content here */}
            <p className="text-white text-sm text-center" >
                Are you sure you want delete the client?
            </p>

            <div className="flex gap-3 justify-center mt-3">
                <div className="px-5 py-1 border border-blue-400 rounded-md text-white cursor-pointer" onClick={handleHide}>Yes</div>
                <div className="px-5 py-1 bg-blue-400 rounded-md text-white cursor-pointer" onClick={handleClose}>No</div>
            </div>

          </div>
        </div>
      )}

        </div>
        </div>
    );
}

export default Card;
