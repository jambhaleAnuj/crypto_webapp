import { useState } from "react";
import hmac_crypt from "../encryption_algo/hmac_crypt";
//npm install crypto-js

const HMAC_crypt = () => {
  const [message, setMessage] = useState("");
  const [secret, setSecret] = useState("");
  const [hmac, setHmac] = useState("");

  return (
    <div className="flex items-center justify-center p-12 mt-10">
      <div className="mx-auto w-full">
        <div>
          <h1 className="font-semibold items-center text-center justify-center mt-4 text-xl sm:text-5xl mb-11">
            Hash-based Message Authentication Code - HMAC
          </h1>
        </div>

        <div>
          <h3 className="font-semibold text-xl sm:text-2xl mb-4">
            Hashing Using HMAC SHA256
          </h3>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            Plain Text:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white  px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
          </label>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-sm sm:text-base font-medium text-[#07074D]">
            Key:{" "}
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-m"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Secret"
            />{" "}
          </label>
        </div>
        <div>
          <button
            className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={() => setHmac(hmac_crypt(message, secret))}
          >
            Encrypt
          </button>
        </div>
        <div className="mb-3 mt-4 justify-center items-center text-center">
          {hmac !== "" && (
            <p className="font-semibold">
              Your Encrypted text is <br />
              <p className=" font-medium text-wrap overflow-auto"> {hmac} </p>
            </p>
          )}
        </div>
        <div className="m-11 font-medium text-md sm:text-xl ">
          HMACSHA256 is a type of keyed hash algorithm that is constructed from
          the SHA-256 hash function and used as a Hash-based Message
          Authentication Code (HMAC). The HMAC process mixes a secret key with
          the message data, hashes the result with the hash function, mixes that
          hash value with the secret key again, and then applies the hash
          function a second time. The output hash is 256 bits in length.
          <br />
          <br />
          An HMAC can be used to determine whether a message sent over an
          insecure channel has been tampered with, provided that the sender and
          receiver share a secret key. The sender computes the hash value for
          the original data and sends both the original data and hash value as a
          single message. The receiver recalculates the hash value on the
          received message and checks that the computed HMAC matches the
          transmitted HMAC.
          <br />
          <br />
          Any change to the data or the hash value results in a mismatch,
          because knowledge of the secret key is required to change the message
          and reproduce the correct hash value. Therefore, if the original and
          computed hash values match, the message is authenticated. HMACSHA256
          accepts keys of any size, and produces a hash sequence 256 bits in
          length.
        </div>
      </div>
    </div>
  );
};

export default HMAC_crypt;
