// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
//       <h1 className="text-3xl font-semibold">Welcome to My App</h1>
//       <Link className="underline" href="/dashboard">
//         Open dashboard
//       </Link>
//     </main>
//   );
// }
"use client";

import { useState,useEffect } from "react";
import dynamic from "next/dynamic";

// const StudentDetails = dynamic(() => import("./studentDetails"), 
//   {
//     loading: () => <p>Loading...</p>
//   }
// );

// export default function Home() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <p>Welcome to the Student Dashboard!</p>
//       <button onClick={() => setShow(true)}>Show Student Details</button>
//       {show && <StudentDetails/>}
//     </div>
//   );
// }-------------------------------------------------------------------------18----------------------------------------
// const Attendance = dynamic(() => import("./attendance"), {
//   loading: () => <p>Loading...</p>
// });

// export default function Home(){
//   const [show,setShow]=useState(false);
//   return(
//     <div>
//       <h1>Student Dashboard</h1>
//       <h2>Welcome to the Student Dashboard!</h2>
//       <button onClick={()=>setShow(true)}>Show Attendance</button>
//       {show && <Attendance/>}
//     </div>
//   )
// }

const ProductDetails = dynamic(() => import("./productDetails"), {
  loading: () => <p>Loading...</p>
});
export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    const target = document.getElementById("product");
    if (target) {
      observer.observe(target);
    }
    return () => {
      observer.disconnect();
    }
  },[]);

  return(
    <div>
      <h1>Online Store</h1>
      <p>Welcome to the Online Store!</p>
      <p>explore our products</p>
      <div style={{height:"100vh"}}>
        <h2>Store products</h2>
        <p>scroll down to see more products</p>
      </div>
      <div id="product">
        {show && <ProductDetails/>}
        {<p>Products will be displayed here.</p>}
      </div>
    </div>
  )
}