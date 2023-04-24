import React from "react";
import { useArray } from "utils";

const TsReactTest = () => {
  const people: { name: string; age: number }[] = [
    { name: "aaa", age: 20 },
    { name: "bb", age: 28 },
  ];
  const { arr, add, removeIndex, clear } = useArray(people);

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add person</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {arr.map((person, index) => {
        return (
          <div key={`person${index}`} style={{ marginTop: 10 }}>
            <span style={{ color: "red" }}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};
