
import Image from "next/image";
import loader from "../public/Assets/amongus.gif";
// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Image src={loader} className="w-20 " />
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && (
        <div className="w-40 overflow-hidden animate-slideRight">
          <Image
            src={loader}
            alt="Loading Animation"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      )}

    </div>
  );
}
