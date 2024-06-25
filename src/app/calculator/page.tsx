"use client";

import React, { useState } from "react";

export default function Page() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);

  const compoundInterest = () => {
    return principal * Math.pow(1 + rate / 100, time) - principal;
  };

  const simpleInterest = () => {
    return (principal * rate * time) / 100;
  };

  return (
    <main>
      <div className="container mx-auto p-4 lg:p-8">
        <h1 className="text-lg" id="current-ipos">
          Interest Calculator
        </h1>
        <div className="border border-black rounded-md p-2 my-2">
          <p>Principal amount: ₹{principal}</p>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="100000"
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))}
            list="principle_amt"
          />
        </div>
        <div className="border border-black rounded-md p-2 my-2">
          <p>Rate of Interest: {rate}%</p>
          <input
            type="range"
            min="0"
            max="20"
            step="0.25"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            list="rate_of_interest"
          />
        </div>
        <div className="border border-black rounded-md p-2 my-2">
          <p>Time Period: {time} years</p>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
          />
        </div>
        <div className="py-2  flex">
          <div className="border border-black rounded-md p-2 ">
            <p>Simple Interest: ₹{simpleInterest()}</p>
            <p>Principle amount ₹{principal}</p>
            <p>
              Total amount with Simple Interest: ₹{principal + simpleInterest()}
            </p>
          </div>
          <div className="border border-black rounded-md p-2 ml-2">
            <p>Compound Interest: ₹{compoundInterest()}</p>
            <p>Principle amount ₹{principal}</p>
            <p>
              Total Amount with Compound Interest: ₹
              {compoundInterest() + principal}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
