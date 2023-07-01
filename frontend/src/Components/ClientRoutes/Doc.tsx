import Navbar from "../Home/Navbar";
import VerticalNav from "../Client/VerticalNav";

function Doc() {
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex flex-row gap-5">
                <VerticalNav></VerticalNav>

                <div className="w-[1257px] h-[884px] relative bg-zinc-900 rounded-2xl border border-zinc-700">
                    <div className="w-[628px] h-20 left-0 top-0 absolute bg-zinc-900 rounded-tl-2xl border border-zinc-700">
                        <div className="left-[30px] top-[23px] absolute text-white text-[28px] font-bold">Tissu Tushar</div>
                        <div className="h-[42px] px-[15px] py-[5px] left-[498px] top-[19px] absolute bg-neutral-900 rounded-md justify-start items-center gap-[15px] inline-flex">
                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="text-center text-white text-[20px] font-medium">Edit</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[631px] h-20 left-[626px] top-0 absolute bg-zinc-900 border border-zinc-700 rounded-tr-lg">
                        <div className="left-[30px] top-[15px] absolute text-white text-[24px] font-bold">Chat</div>
                        <div className="left-[33px] top-[44px] absolute text-white text-[16px] font-normal leading-tight">You, Tushar, Om, Timeo</div>
                        <div className="w-[99px] h-[42px] left-[502px] top-[19px] absolute">
                            <div className="w-[42px] h-[42px] left-0 top-0 absolute" />
                            <div className="w-[42px] h-[42px] left-[57px] top-0 absolute" />
                        </div>
                        <div className="w-[631px] h-20 left-0 top-[-1px] absolute bg-zinc-900 border rounded-tr-lg border-zinc-700">
                            <div className="left-[30px] top-[18px] absolute text-white text-[20px] font-bold">Chat</div>
                            <div className="left-[30px] top-[42px] absolute text-slate-400 text-[16px] font-normal leading-tight">You, Tushar & Om</div>
                        </div>
                    </div>
                    <div className="w-[566px] h-[744px] left-[30px] top-[110px] absolute bg-neutral-900 rounded-lg border border-zinc-700">
                        <div className="w-[566px] h-[744px] relative bg-neutral-900 rounded-lg border border border border border-zinc-700">
                            <div className="w-[493px] h-9 left-[30px] top-[25px] absolute">
                                <div className="left-0 top-0 absolute text-white text-[28px] font-bold">Notes</div>
                                <div className="absolute right-[20px]"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.25 12.25H15.75V1.75C15.75 1.28587 15.5656 0.840752 15.2374 0.512563C14.9092 0.184375 14.4641 0 14 0C13.5359 0 13.0908 0.184375 12.7626 0.512563C12.4344 0.840752 12.25 1.28587 12.25 1.75V12.25H1.75C1.28587 12.25 0.840752 12.4344 0.512563 12.7626C0.184375 13.0908 0 13.5359 0 14C0 14.4641 0.184375 14.9092 0.512563 15.2374C0.840752 15.5656 1.28587 15.75 1.75 15.75H12.25V26.25C12.25 26.7141 12.4344 27.1593 12.7626 27.4874C13.0908 27.8156 13.5359 28 14 28C14.4641 28 14.9092 27.8156 15.2374 27.4874C15.5656 27.1593 15.75 26.7141 15.75 26.25V15.75H26.25C26.7141 15.75 27.1593 15.5656 27.4874 15.2374C27.8156 14.9092 28 14.4641 28 14C28 13.5359 27.8156 13.0908 27.4874 12.7626C27.1593 12.4344 26.7141 12.25 26.25 12.25Z" fill="#FDFDFD"/>
</svg>
</div>

                            </div>
                            <div className="left-[259px] top-[190px] absolute" />
                            <div className="w-[494px] h-[65px] left-[30px] top-[121px] absolute bg-neutral-800 rounded-md border border border border border-zinc-700">
                                <div className="left-[20px] top-[10px] absolute text-white text-[20px] font-bold">Testing</div>
                                <div className="left-[20px] top-[38px] absolute text-slate-400 text-[14px] font-light">17th Feb 2023 </div>
                            </div>
                        </div>
                        <div className="w-8 h-8 left-[510px] top-[25px] absolute" />
                        {/* <div className="w-[494px] left-[30px] top-[236px] absolute text-white text-[16px] font-light">This consist of developers</div> */}
                        <div className="left-[259px] top-[190px] absolute" />
                    </div>
                    <div className="w-[631px] h-[806px] left-[626px] top-[78px] absolute bg-neutral-900 rounded-br-2xl border border-zinc-700" />
                </div>
            </div>

        </div>
    );
}

export default Doc;
