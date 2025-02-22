"use client";
import React, { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const GenerateContent = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");

  const handlechange = (index, link, linktext) => {
    setLinks((initialLink) => {
      return initialLink.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://https://linktre-gilt.vercel.app/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast(result.message);
      setLinks([]);
      sethandle("");
      setpic("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-orange-400 min-h-screen grid grid-cols-2 ">
      <div className="col1 flex justify-center items-center flex-col ">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-4xl">Create Your Linktree</h1>

          <div className="items">
            <h2 className="font-semibold text-2xl">
              Step-1: Choose Your Handle
            </h2>
            <div className="mx-4">
              <input
                value={handle || ""}
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                className="px-4 py-2 mx-2 my-2 focus:outline-orange-300 rounded-full"
                type="text"
                placeholder="Choose a handle"
              />
            </div>
          </div>
          <div className="items">
            <h2 className="font-semibold text-2xl">Step-2: Add Your Links</h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="mx-4">
                    <input
                      value={item.link || ""}
                      onChange={(e) => {
                        handlechange(index, e.target.value, item.linktext);
                      }}
                      className="px-4 py-2 mx-2 my-2
               focus:outline-orange-300 rounded-full"
                      type="text"
                      placeholder="Enter link"
                    />

                    <input
                      value={item.linktext || ""}
                      onChange={(e) => {
                        handlechange(index, item.link, e.target.value);
                      }}
                      className="px-4 py-2 mx-2 my-2 focus:outline-orange-300 rounded-full"
                      type="text"
                      placeholder="Enter link Text"
                    />
                  </div>
                );
              })}
            <button
              onClick={() => addLink()}
              className="p-5 py-2 rounded-3xl mx-2 bg-orange-800 text-white font-bold"
            >
              +Add Link
            </button>
          </div>
          <div className="items">
            <h2 className="font-semibold text-2xl">
              Step-3: Add Your Picture and finalize
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={pic || ""}
                onChange={(e) => {
                  setpic(e.target.value);
                }}
                className="px-4 py-2 mx-2 my-2
                 focus:outline-orange-300 rounded-full"
                type="text"
                placeholder="Add your picture"
              />
              <button
                disabled={pic == "" || handle == "" || links[0].linktext == ""}
                onClick={() => {
                  submitLinks();
                }}
                className="disabled:bg-slate-500 p-5 py-2 rounded-3xl mx-2 bg-orange-800 w-fit my-2 text-white font-bold"
              >
                Finalize
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-orange-400">
        <img className="h-full object-contain" src="login.png" />
        <ToastContainer />
      </div>
    </div>
  );
};

const Generate = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
};

export default Generate;
