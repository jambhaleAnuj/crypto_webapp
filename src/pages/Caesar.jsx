import React from "react";

import { useState } from "react";
import caesarCipher from "../encryption_algo/caesarCipher";
import caesarDecrypt from "../decryption_algo/caesarDecrypt";
const Caesar = () => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [crpyt, setCrypt] = useState("");
  const ageAsNumber = Number(age);

  const [decryptText, setDecryptText] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const decryptKeyAsNumber = Number(decryptKey);
  const [decrypt, setDecrypt] = useState("");

  return (
    <div className="flex items-center justify-center p-12 mt-10">
      <div className="mx-auto w-full">
        <div>
          <h1 className="font-semibold items-center text-center justify-center text-5xl mb-11">
            Caesar Cipher
          </h1>
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-4">
            Encrypting Using Caesar Cipher
          </h3>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Plain Text:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white  px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Key:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-m"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />{" "}
          </label>
        </div>
        <div>
          <button
            className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={() => setCrypt(caesarCipher(firstName, ageAsNumber))}
          >
            Encrypt
          </button>
        </div>
        <div className="mb-3 mt-4 justify-center items-center text-center">
          {firstName !== "" && (
            <p className="font-semibold">
              Your Encrypted text is <br />
              <p className=" font-medium"> {crpyt} </p>
            </p>
          )}
        </div>

        {
          ////////////////////////////////////////////////////////////
        }
        <div>
          <h3 className="font-semibold text-2xl mb-4 mt-11">
            Decrypting Using Caesar Cipher
          </h3>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Cipher Text:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={decryptText}
              onChange={(e) => setDecryptText(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            {" "}
            Key:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={decryptKey}
              onChange={(e) => setDecryptKey(e.target.value)}
              type="number"
            />{" "}
          </label>
        </div>
        <button
          className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={() =>
            setDecrypt(caesarDecrypt(decryptText, decryptKeyAsNumber))
          }
        >
          Decrypt
        </button>
        <div className="mb-3 mt-4 justify-center items-center text-center">
          {decryptText !== "" && (
            <p className="font-semibold">
              Your decrypted text is <br />
              <p className=" font-medium"> {decrypt} </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Caesar;
