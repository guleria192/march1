import React from "react";
import Cards from "../common/Cards";
import micon from "../../assects/micon.png";
const data = [
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
];
function OnePlatform() {
  return (
    <div className="one-platform-container">
      <h1>
        One Platform Many <span>Solutions</span>
      </h1>
      <div>
        {data.map((item, index) => {
          return (
            <Cards
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OnePlatform;
