import React from "react";
import pl from "../assets/images/pl.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HPlacement() {
  const placements = [{ img: pl }, { img: pl }, { img: pl }];
  return (
    <div className="py-12 px-5">
      <h1 className="text-4xl text-center font-bold">Success Stories</h1>
      <div className="flex flex-wrap justify-center my-8 gap-8">
        {placements?.map((item, index) => (
          <div key={index} style={{ margin: "12px" }}>
            <img src={item.img} alt="" width={350} height={500} />
          </div>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <button
          style={{
            backgroundColor: "#c50101",
            color: "#fff",
            borderRadius: "10px",
          }}
          className="py-3 px-5 flex items-center gap-1"
        >
          VIEW MORE <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
