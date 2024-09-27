import { useState } from "react";
import desCipher from "../encryption_algo/des";
import desDecrypt from "../decryption_algo/desDecrypt";
const DES = () => {
  const [plainTxt, setplainTxt] = useState("");
  const [EncryptKey, setEncryptKey] = useState("");
  const [crpyt, setCrypt] = useState("");

  const [decryptText, setDecryptText] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const [decrypt, setDecrypt] = useState("");

  return (
    <div className="flex items-center justify-center p-12 mt-10">
      <div className="mx-auto w-full">
        <div>
          <h1 className="font-semibold items-center text-center justify-center text-2xl tracking-wide mt-2 sm:text-5xl mb-11">
            Data Encryption Algorithm
          </h1>
        </div>

        <div>
          <h3 className="font-semibold text-xl sm:text-2xl mb-4">
            Encrypting Using DES
          </h3>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            Plain Text:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white  px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"
              value={plainTxt}
              onChange={(e) => setplainTxt(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            Key:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-m"
              value={EncryptKey}
              onChange={(e) => setEncryptKey(e.target.value)}
            />{" "}
          </label>
        </div>
        <div>
          <button
            className="hover:shadow-form w-full rounded-md bg-black hover:bg-[#000000cb] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={() => setCrypt(desCipher(EncryptKey, plainTxt))}
          >
            Encrypt
          </button>
        </div>
        <div className="mb-3 mt-4 justify-center items-center text-center">
          {plainTxt !== "" && (
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
          <h3 className="font-semibold text-xl sm:text-2xl mb-4 mt-11">
            Decrypting Using DES
          </h3>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            Cipher Text:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={decryptText}
              onChange={(e) => setDecryptText(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            {" "}
            Key:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={decryptKey}
              onChange={(e) => setDecryptKey(e.target.value)}
            />{" "}
          </label>
        </div>
        <button
          className="hover:shadow-form w-full rounded-md bg-black hover:bg-[#000000cb] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={() => setDecrypt(desDecrypt(decryptKey, decryptText))}
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

export default DES;
