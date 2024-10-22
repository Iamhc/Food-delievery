import { useEffect, useState } from "react";

const Onlinestatus = () => {
  const [statenet, setstatenet] = useState(true);

  useEffect(() => {
    // Handler for going offline
    const handleOffline = (event) => {
      setstatenet(false);
      event.preventDefault();
    };

    // Handler for going online
    const handleOnline = () => setstatenet(true);

    // Add event listeners for online and offline events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [navigator.onLine]); // Only run once when the component mounts
};

export default Onlinestatus;
