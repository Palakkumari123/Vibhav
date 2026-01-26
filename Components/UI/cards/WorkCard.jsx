import { FaEye } from "react-icons/fa";
import Link from "next/link"; 
import { MdOpenInNew } from "react-icons/md";

const WorkCard = ({ work, type, year }) => {
  const brandBlue = "#5b8ef3";

  return (
    <Link href={`/work/${year}/${type}/${work.id}`}>
      {/* Main Container: Deep Zinc background with a subtle blue glow on hover */}
      <div className="group relative w-72 h-[26rem] md:w-80 md:h-[28rem] bg-[#0c1217] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border-2 border-zinc-800/50 hover:border-[#5b8ef3] hover:shadow-[0_0_40px_rgba(91,142,243,0.25)]">
        
        {/* HUD Grid Background: Matches the "Spidybot" and "Bionic Arm" style */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500"
          style={{ 
            backgroundImage: `linear-gradient(${brandBlue} 1px, transparent 1px), linear-gradient(90deg, ${brandBlue} 1px, transparent 1px)`, 
            backgroundSize: '25px 25px' 
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full p-5">
          {/* Image Frame: High-quality display with a thin tech-border */}
          <div className="relative overflow-hidden rounded-lg h-64 border border-white/5 bg-zinc-900 shadow-inner">
            <img
              src={work.images[0]}
              alt={work.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Action Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
               <div className="bg-[#5b8ef3] p-4 rounded-full shadow-[0_0_20px_#5b8ef3] scale-0 group-hover:scale-100 transition-transform duration-500">
                 <FaEye className="text-black text-2xl" />
               </div>
            </div>
          </div>

          {/* Typography Section: Professional alignment and spacing */}
          <div className="flex flex-col items-center justify-center flex-grow mt-6">
            <h3 className="text-white text-xl font-chakraBold uppercase tracking-[0.1em] text-center leading-tight">
              {work.name}
            </h3>
            
            {/* Status Tag: Clean "Explore" label with HUD aesthetics */}
            <div className="mt-5 px-5 py-1.5 border border-[#5b8ef3]/40 rounded bg-[#5b8ef3]/5 flex items-center gap-3 group-hover:bg-[#5b8ef3]/10 transition-colors">
              <span className="text-[#5b8ef3] text-[10px] font-chakraBold tracking-[0.4em] uppercase">
                Explore Project
              </span>
              <MdOpenInNew className="text-[#5b8ef3] text-sm animate-pulse" />
            </div>
          </div>
        </div>

        {/* HUD Technical Elements: Brackets in the corners */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#5b8ef3]/30 group-hover:border-[#5b8ef3] transition-all duration-500"></div>
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#5b8ef3]/30 group-hover:border-[#5b8ef3] transition-all duration-500"></div>
      </div>
    </Link>
  );
};

export default WorkCard;
