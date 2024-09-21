import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

  const ref=useRef(null);

  const data=[
    {
      desc:"This is the First para of first card",
      filesize:".9mb",
      close:true,
      tag:{isOpen:false, tagTitle:"Download Now", tagColor: "green"},
    },
    {
      desc:"This is the First para of first card",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor: "green"},
    },
    {
      desc:"This is the First para of first card",
      filesize:".9mb",
      close:true,
      tag:{isOpen:true, tagTitle:"Upload", tagColor: "blue"},
    },
    {
      desc:"This is the First para of first card",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor: "green"},
    }
  ];
  return (
    <>
      <div ref={ref} className="fixed z-[3] h-screen w-full m-5 flex flex-wrap gap-10">
        {data.map((item, index)=>(
          <Card  data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
