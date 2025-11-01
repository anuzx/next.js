"use client";
import axios from "axios";
import { useState } from "react";
export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input
          type="text"
          placeholder="username"
          className="border p-2 m-6"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <input
          type="password"
          placeholder="password"
          className="border p-2 m-6"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin",{username , password })
          
          //when we introduce onClick handler we have to convert to client by doing "use client"
          }}>
          Sign in
        </button>
      </div>
    </div>
  );
}
//this need to hit backend , backend need to hit database put the data and return things