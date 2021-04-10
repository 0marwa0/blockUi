import { GrFormClose } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { RiEdit2Fill } from "react-icons/ri";
import React from "react";
import "./styles/steps.css";
const templet = [
  { id: "11", tempName: "water", row: [{ name: "test", price: "55$" }] },
];
function Index() {
  return (
    <div className="record-step1">
      {templet.map((item) => (
        <div className="record-templet">
          <div className="head">
            <CgClose color="red" />
            {item.tempName}
            <div></div>
          </div>
          {item.row.map((i) => (
            <div className="row">
              <div>
                <CgClose color="red" />
              </div>
              <div>
                <RiEdit2Fill color="var(--yellow)" />
              </div>{" "}
              <div>{i.name}</div>
            </div>
          ))}
          <di>
            {" "}
            <div className="btn">
              Add <FaPlus />
            </div>
          </di>
        </div>
      ))}
    </div>
  );
}

export default Index;
