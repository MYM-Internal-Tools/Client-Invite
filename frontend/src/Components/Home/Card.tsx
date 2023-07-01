import { useNavigate } from "react-router-dom";

interface PersonProps {
    Name: string;
    Process: number;
    Description: string;
    Date: string;
      
}

function Card(props: PersonProps) {

  const navigate= useNavigate();

  const handleNavigate = () =>{
    navigate("/Client")
  }


//   console.log(props);
  return (
    <div className="w-[100%] sm:w-[314px] h-[314px] flex flex-col" onClick={()=> handleNavigate()}>
      <div className="w-[100%] h-[100%] sm:w-[314px] sm:h-[314px] bg-neutral-900 rounded-lg border border-zinc-700 flex flex-col">

        <div className="flex items-center mt-5">
          <div className="ml-4 text-white text-[24px] font-bold">
            {props.Name}
          </div>
          <svg
            className="w-8 h-8 ml-auto"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 26.6668C15.2667 26.6668 14.6391 26.4059 14.1173 25.8842C13.5947 25.3615 13.3333 24.7335 13.3333 24.0002C13.3333 23.2668 13.5947 22.6388 14.1173 22.1162C14.6391 21.5944 15.2667 21.3335 16 21.3335C16.7333 21.3335 17.3613 21.5944 17.884 22.1162C18.4058 22.6388 18.6667 23.2668 18.6667 24.0002C18.6667 24.7335 18.4058 25.3615 17.884 25.8842C17.3613 26.4059 16.7333 26.6668 16 26.6668ZM16 18.6668C15.2667 18.6668 14.6391 18.4055 14.1173 17.8828C13.5947 17.3611 13.3333 16.7335 13.3333 16.0002C13.3333 15.2668 13.5947 14.6388 14.1173 14.1162C14.6391 13.5944 15.2667 13.3335 16 13.3335C16.7333 13.3335 17.3613 13.5944 17.884 14.1162C18.4058 14.6388 18.6667 15.2668 18.6667 16.0002C18.6667 16.7335 18.4058 17.3611 17.884 17.8828C17.3613 18.4055 16.7333 18.6668 16 18.6668ZM16 10.6668C15.2667 10.6668 14.6391 10.4055 14.1173 9.88283C13.5947 9.36105 13.3333 8.7335 13.3333 8.00016C13.3333 7.26683 13.5947 6.63927 14.1173 6.1175C14.6391 5.59483 15.2667 5.3335 16 5.3335C16.7333 5.3335 17.3613 5.59483 17.884 6.1175C18.4058 6.63927 18.6667 7.26683 18.6667 8.00016C18.6667 8.7335 18.4058 9.36105 17.884 9.88283C17.3613 10.4055 16.7333 10.6668 16 10.6668Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="flex-grow p-4 flex-1">
          <div className="text-white text-[12px] font-normal">
            {props.Description}
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
  );
}

export default Card;
