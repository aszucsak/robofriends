import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  const cards = robots.map(robot => (
    <Card name={robot.name} email={robot.email} key={robot.id} id={robot.id} />
  ));
  // if (true) {
  //   throw new Error("NOOO");
  // }
  return <div>{cards}</div>;
}
