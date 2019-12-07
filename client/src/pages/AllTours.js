import React from "react";

export default function AllTours(props) {
  console.log(props, "props from all tours");
  return (
    <div>
      <h1>Hi {props.username} find your tour</h1>
    </div>
  );
}
