import React from "react";

interface Props {
  title: string;
}

const Filter = ({ title }: Props) => {
  return <div>Filter {title}</div>;
};

export default Filter;
