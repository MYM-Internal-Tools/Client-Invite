import Navbar from "../Home/Navbar";
import VerticalNav from "../Client/VerticalNav";

function Brief() {
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
                        <div className="w-[493px] h-[178px] left-[30px] top-[25px] absolute">
                            <div className="left-0 top-0 absolute text-white text-[28px] font-bold">Brief</div>
                            <div className="left-[115px] top-[97px] absolute text-white text-[16px] font-bold">Tissu Tushar</div>
                            <div className="left-0 top-[98px] absolute text-white text-[16px] font-normal">Name</div>
                            <div className="left-0 top-[132px] absolute text-white text-[16px] font-normal">Client Tag</div>
                            <div className="w-3 h-3 left-[115px] top-[135px] absolute rounded-full border border-white" />
                        </div>
                        <div className="w-8 h-8 left-[510px] top-[25px] absolute" />
                        <div className="w-[494px] left-[30px] top-[236px] absolute text-white text-[16px] font-light">This consist of developers</div>
                        <div className="left-[259px] top-[190px] absolute" />
                    </div>
                    <div className="w-[631px] h-[806px] left-[626px] top-[78px] absolute bg-neutral-900 rounded-br-2xl border border-zinc-700" />
                </div>
            </div>

        </div>
    );
}

export default Brief;
