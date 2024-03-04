// "use client";

// import React, { useEffect, useRef } from "react";
// import { animateScroll as scroll } from "react-scroll";

// interface SmoothScrollProps {
//   children: React.ReactNode;
// }

// const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
//   const isManualScroll = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isManualScroll.current) {
//         scroll.scrollToBottom();
//       }
//     };

//     const handleManualScroll = () => {
//       isManualScroll.current = true;
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("wheel", handleManualScroll);
//     window.addEventListener("touchstart", handleManualScroll);
//     window.addEventListener("mousedown", handleManualScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("wheel", handleManualScroll);
//       window.removeEventListener("touchstart", handleManualScroll);
//       window.removeEventListener("mousedown", handleManualScroll);
//     };
//   }, []);

//   return <div>{children}</div>;
// };

// export default SmoothScroll;
