import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
      <Marquee direction="right" autoFill>
        <img src={"https://assets.visionarylabstech.com/home/partners/1.png"} alt="" height={96} />
      </Marquee>
      <Marquee direction="left" autoFill>
        <img src={"https://assets.visionarylabstech.com/home/partners/2.png"} alt="" height={96} />
      </Marquee>
      <Marquee direction="right" autoFill>
        <img src={"https://assets.visionarylabstech.com/home/partners/3.png"} alt="" height={96} />
      </Marquee>
      <Marquee direction="left" autoFill>
        <img src={"https://assets.visionarylabstech.com/home/partners/4.png"} alt="" height={96} />
      </Marquee>
    </>
  );
};

export { Partners };
